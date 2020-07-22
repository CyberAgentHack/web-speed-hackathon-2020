const http = require('http');
const axios = require('axios').default;

const api = axios.create({
  baseURL: 'https://web-speed-hackathon-api.herokuapp.com/api',
  httpAgent: new http.Agent({ keepAlive: true }),
});

const cache = new Map();

function getBlogs(limit, offset) {
  const params = { limit, offset };

  const key = '/blogs' + JSON.stringify(params);

  if (cache.has(key)) {
    return new Promise((resolve) => {
      const result = {
        data: cache.get(key),
      };

      resolve(result);
    });
  }

  return new Promise((resolve) => {
    api.get('/blogs', { params }).then((result) => {
      cache.set(key, result.data);

      resolve(result);
    });
  });
}

function getBlogById(blogId) {
  const key = `/blog/${blogId}`;

  if (cache.has(key)) {
    return new Promise((resolve) => {
      const result = {
        data: cache.get(key),
      };

      resolve(result);
    });
  }

  return new Promise((resolve) => {
    api.get(`/blog/${blogId}`).then((result) => {
      cache.set(key, result.data);

      resolve(result);
    });
  });
}

function getBlogEntries(blogId, limit, offset) {
  const params = { limit, offset };

  const key = `/blog/${blogId}/entries` + JSON.stringify(params);

  if (cache.has(key)) {
    return new Promise((resolve) => {
      const result = {
        data: cache.get(key),
      };

      resolve(result);
    });
  }

  return new Promise((resolve) => {
    api.get(`/blog/${blogId}/entries`, { params }).then((result) => {
      cache.set(key, result.data);

      resolve(result);
    });
  });
}

function getBlogEntryById(blogId, entryId) {
  // no-cache, because response has like_count
  return api.get(`/blog/${blogId}/entry/${entryId}`);
}

function getBlogEntryComments(blogId, entryId, limit, offset) {
  const params = { limit, offset };

  const key =
    `/blog/${blogId}/entry/${entryId}/comments` + JSON.stringify(params);

  if (cache.has(key)) {
    return new Promise((resolve) => {
      const result = {
        data: cache.get(key),
      };

      resolve(result);
    });
  }

  return new Promise((resolve) => {
    api
      .get(`/blog/${blogId}/entry/${entryId}/comments`, { params })
      .then((result) => {
        cache.set(key, result.data);

        resolve(result);
      });
  });
}

function getBlogEntryCommentById(blogId, entryId, commentId) {
  const key = `/blog/${blogId}/entry/${entryId}/comment/${commentId}`;

  if (cache.has(key)) {
    return new Promise((resolve) => {
      const result = {
        data: cache.get(key),
      };

      resolve(result);
    });
  }

  return new Promise((resolve) => {
    api
      .get(`/blog/${blogId}/entry/${entryId}/comment/${commentId}`)
      .then((result) => {
        cache.set(key, result.data);

        resolve(result);
      });
  });
}

function postBlogEntryLike(blogId, entryId) {
  return api.post(`/blog/${blogId}/entry/${entryId}/like`);
}

module.exports = {
  api,
  getBlogs,
  getBlogById,
  getBlogEntries,
  getBlogEntryById,
  getBlogEntryComments,
  getBlogEntryCommentById,
  postBlogEntryLike,
};
