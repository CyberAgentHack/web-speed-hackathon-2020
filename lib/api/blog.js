import axios from 'axios';
import {blogs} from './blogs';
import {entries} from './entries';
import {blog_id} from './blog_id';

export const api = axios.create({
  baseURL: 'https://web-speed-hackathon-api.herokuapp.com/api',
});

export function getBlogs(limit, offset) {
	return {
		data: blogs,
		status: 200,
		statusText: 'OK',
		headers: {},
		config: {},
		request: {}
	}
}

export function getBlogById(blogId) {
	return {
		data: blog_id[blogId],
		status: 200,
		statusText: 'OK',
		headers: {},
		config: {},
		request: {}
	}
}

export function getBlogEntries(blogId, limit, offset) {
	return {
		data: entries[blogId],
		status: 200,
		statusText: 'OK',
		headers: {},
		config: {},
		request: {}
	}
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
