import { ApiCache } from './api_cache';
import {
  getBlogById,
  getBlogEntries,
  getBlogEntryById,
  getBlogEntryCommentById,
  getBlogEntryComments,
  getBlogs,
} from './blog';

class BlogsApi extends ApiCache {
  async fetch(limit, offset) {
    const { data } = await getBlogs(limit, offset);
    return data;
  }
}

class BlogByIdApi extends ApiCache {
  async fetch(blogId) {
    const { data } = await getBlogById(blogId);
    return data;
  }
}

class BlogEntriesApi extends ApiCache {
  async fetch(blogId, limit, offset) {
    const { data } = await getBlogEntries(blogId, limit, offset);
    return data;
  }
}

class BlogEntryByIdApi extends ApiCache {
  async fetch(blogId, entryId) {
    const { data } = await getBlogEntryById(blogId, entryId);
    return data;
  }
}

class BlogEntryCommentsApi extends ApiCache {
  async fetch(blogId, entryId, limit, offset) {
    const { data } = await getBlogEntryComments(blogId, entryId, limit, offset);
    return data;
  }
}

class BlogEntryCommentByIdApi extends ApiCache {
  async fetch(blogId, entryId, commentId) {
    const { data } = await getBlogEntryCommentById(blogId, entryId, commentId);
    return data;
  }
}

export const apiGateway = {
  blogs: new BlogsApi(),
  blogById: new BlogByIdApi(),
  blogEntries: new BlogEntriesApi(),
  blogEntryById: new BlogEntryByIdApi(),
  blogEntryComments: new BlogEntryCommentsApi(),
  blogEntryCommentById: new BlogEntryCommentByIdApi(),
};
