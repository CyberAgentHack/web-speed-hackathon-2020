import express from 'express';
import { asyncWrap } from '../utils';
import { postBlogEntryLike } from '../api/blog';
import { apiGateway } from '../api/api_gateway';
import { Payload } from '../model/payload';

export const apiController = express.Router();

apiController.get(
  '/api/blogs',
  asyncWrap(async (req, res) => {
    const { limit, offset } = req.query;
    const data = await apiGateway.blogs.get(limit, offset);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

apiController.get(
  '/api/blog/:blogId',
  asyncWrap(async (req, res) => {
    const { blogId } = req.params;
    const data = await apiGateway.blogById.get(blogId);
    res.send(data);
  }),
);

apiController.get(
  '/api/blog/:blogId/entries',
  asyncWrap(async (req, res) => {
    const { blogId } = req.params;
    const { limit, offset } = req.query;
    const data = await apiGateway.blogEntries.get(blogId, limit, offset);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

apiController.get(
  '/api/blog/:blogId/entry/:entryId',
  asyncWrap(async (req, res) => {
    const { blogId, entryId } = req.params;
    const data = await apiGateway.blogEntryById.get(blogId, entryId);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

apiController.get(
  '/api/blog/:blogId/entry/:entryId/comments',
  asyncWrap(async (req, res) => {
    const { blogId, entryId } = req.params;
    const { limit, offset } = req.query;
    const data = await apiGateway.blogEntryComments.get(
      blogId,
      entryId,
      limit,
      offset,
    );
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

apiController.get(
  '/api/blog/:blogId/entry/:entryId/comment/:commentId',
  asyncWrap(async (req, res) => {
    const { blogId, entryId, commentId } = req.params;
    const data = await apiGateway.blogEntryCommentById.get(
      blogId,
      entryId,
      commentId,
    );
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
