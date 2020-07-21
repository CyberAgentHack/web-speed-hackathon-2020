const http = require('http');
const axios = require('axios').default;

const api = axios.create({
  baseURL: 'https://web-speed-hackathon-api.herokuapp.com/api',
  httpAgent: new http.Agent({ keepAlive: true })
});

function getBlogs(limit, offset) {
  const params = { limit, offset };
  return api.get('/blogs', { params });
}

function getBlogById(blogId) {
  return api.get(`/blog/${blogId}`);
}

function getBlogEntries(blogId, limit, offset) {
  const params = { limit, offset };
  return api.get(`/blog/${blogId}/entries`, { params });
}

function getBlogEntryById(blogId, entryId) {
  return api.get(`/blog/${blogId}/entry/${entryId}`);
}

function getBlogEntryComments(blogId, entryId, limit, offset) {
  const params = { limit, offset };
  return api.get(`/blog/${blogId}/entry/${entryId}/comments`, { params });
}

function getBlogEntryCommentById(blogId, entryId, commentId) {
  return api.get(`/blog/${blogId}/entry/${entryId}/comment/${commentId}`);
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
  postBlogEntryLike
};
