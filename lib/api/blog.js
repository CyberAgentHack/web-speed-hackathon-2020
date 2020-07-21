import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://web-speed-hackathon-api.herokuapp.com/api',
});

export function getBlogs(limit, offset) {
  const params = { limit, offset };
  return api.get('/blogs', { params });
}

export function getBlogById(blogId) {
  return api.get(`/blog/${blogId}`);
}

export function getBlogEntries(blogId, limit, offset) {
  const params = { limit, offset };
  return api.get(`/blog/${blogId}/entries`, { params });
}

export function getBlogEntryById(blogId, entryId) {
  return api.get(`/blog/${blogId}/entry/${entryId}`);
}

export function getBlogEntryComments(blogId, entryId, limit, offset) {
  const params = { limit, offset };
  return api.get(`/blog/${blogId}/entry/${entryId}/comments`, { params });
}

export function getBlogEntryCommentById(blogId, entryId, commentId) {
  return api.get(`/blog/${blogId}/entry/${entryId}/comment/${commentId}`);
}

export function postBlogEntryLike(blogId, entryId) {
  return api.post(`/blog/${blogId}/entry/${entryId}/like`);
}
