import express from 'express';
import { asyncWrap } from '../utils';
import {
  getBlogById,
  getBlogEntries,
  getBlogEntryById,
  getBlogEntryCommentById,
  getBlogEntryComments,
  getBlogs,
  postBlogEntryLike,
} from '../api/blog';
import { Payload } from '../model/payload';

export const apiController = express.Router();

apiController.get(
  '/api/blogs',
  asyncWrap(async (req, res) => {
    const { limit, offset } = req.query;
    const { data } = await getBlogs(limit, offset);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

apiController.get(
  '/api/blog/:blogId',
  asyncWrap(async (req, res) => {
    const { blogId } = req.params;
    const { data } = await getBlogById(blogId);
    res.send(data);
  }),
);

apiController.get(
  '/api/blog/:blogId/entries',
  asyncWrap(async (req, res) => {
    const { blogId } = req.params;
    const { limit, offset } = req.query;
    const { data } = await getBlogEntries(blogId, limit, offset);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

apiController.get(
  '/api/blog/:blogId/entry/:entryId',
  asyncWrap(async (req, res) => {
    const { blogId, entryId } = req.params;
    const { data } = await getBlogEntryById(blogId, entryId);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

apiController.get(
  '/api/blog/:blogId/entry/:entryId/comments',
  asyncWrap(async (req, res) => {
    const { blogId, entryId } = req.params;
    const { limit, offset } = req.query;
    const { data } = await getBlogEntryComments(blogId, entryId, limit, offset);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

apiController.get(
  '/api/blog/:blogId/entry/:entryId/comment/:commentId',
  asyncWrap(async (req, res) => {
    const { blogId, entryId, commentId } = req.params;
    const { data } = await getBlogEntryCommentById(blogId, entryId, commentId);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

apiController.post(
  '/api/blog/:blogId/entry/:entryId/like',
  asyncWrap(async (req, res) => {
    const { blogId, entryId } = req.params;
    const { data } = await postBlogEntryLike(blogId, entryId);
    res.send(data);
  }),
);
