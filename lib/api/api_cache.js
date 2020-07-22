import LRU from 'lru-cache';

const DEFAULT_MAX_AGE = 1000 * 60 * 5;
const DEFAULT_MAX_AGE_ON_ERROR = 1000 * 30;
const DEFAULT_MAX_ITEM_COUNT = 50;

const CACHE_PRUNE_INTERVAL = 1000 * 60 * 60;

export class ApiCache {
  constructor(cacheOptions = {}) {
    const option = {
      ...{
        max: DEFAULT_MAX_ITEM_COUNT,
        maxAge: DEFAULT_MAX_AGE,
      },
      ...cacheOptions,
    };
    this.cache = new LRU(option);
    this.maxAgeOnError = cacheOptions.maxAgeOnError || DEFAULT_MAX_AGE_ON_ERROR;
    this.fetchingPromiseMap = new Map();

    this._intervalId = setInterval(() => {
      const itemCount = this.cache.itemCount;
      this.cache.prune();
      const prunedItemCount = itemCount - this.cache.itemCount;
      logger.info(`${prunedItemCount} caches has pruned`);
    }, CACHE_PRUNE_INTERVAL);
  }

  async get(key, options = {}) {
    if (this.cache.has(key)) {
      const cached = this.cache.get(key);
      if (cached instanceof Error) {
        throw cached;
      }

      return cached;
    }

    if (this.fetchingPromiseMap.has(key)) {
      const result = await this.fetchingPromiseMap.get(key);
      return result;
    }

    const promise = this.fetch(key, options);
    this.fetchingPromiseMap.set(key, promise);

    try {
      const result = await promise;
      this.fetchingPromiseMap.delete(key);
      this.cache.set(key, result);
      return result;
    } catch (e) {
      this.fetchingPromiseMap.delete(key);
      this.cache.set(key, e, this.maxAgeOnError);
      throw e;
    }
  }

  fetch(key, options) {
    return new Error('This is an abstract method to implement in subclasses.');
  }
}
