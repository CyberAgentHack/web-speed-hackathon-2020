import express from 'express';
import fs from 'fs';
import path from 'path';
import { asyncWrap } from '../lib/utils';
import {
  getBlogById,
  getBlogEntries,
  getBlogEntryById,
  getBlogEntryCommentById,
  getBlogEntryComments,
  getBlogs,
  postBlogEntryLike,
} from '../lib/api/blog';
import { Payload } from '../lib/model/payload';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));

// apiController
app.get(
  '/api/blogs',
  asyncWrap(async (req, res) => {
    const { limit, offset } = req.query;
    const { data } = await getBlogs(limit, offset);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

app.get(
  '/api/blog/:blogId',
  asyncWrap(async (req, res) => {
    const { blogId } = req.params;
    const { data } = await getBlogById(blogId);
    res.send(data);
  }),
);

app.get(
  '/api/blog/:blogId/entries',
  asyncWrap(async (req, res) => {
    const { blogId } = req.params;
    const { limit, offset } = req.query;
    const { data } = await getBlogEntries(blogId, limit, offset);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

app.get(
  '/api/blog/:blogId/entry/:entryId',
  asyncWrap(async (req, res) => {
    const { blogId, entryId } = req.params;
    const { data } = await getBlogEntryById(blogId, entryId);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

app.get(
  '/api/blog/:blogId/entry/:entryId/comments',
  asyncWrap(async (req, res) => {
    const { blogId, entryId } = req.params;
    const { limit, offset } = req.query;
    const { data } = await getBlogEntryComments(blogId, entryId, limit, offset);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

app.get(
  '/api/blog/:blogId/entry/:entryId/comment/:commentId',
  asyncWrap(async (req, res) => {
    const { blogId, entryId, commentId } = req.params;
    const { data } = await getBlogEntryCommentById(blogId, entryId, commentId);
    const payload = new Payload(data);
    res.send(payload.toResponse());
  }),
);

app.post(
  '/api/blog/:blogId/entry/:entryId/like',
  asyncWrap(async (req, res) => {
    const { blogId, entryId } = req.params;
    const { data } = await postBlogEntryLike(blogId, entryId);
    res.send(data);
  }),
);

// spaController
app.all('*', (_req, res) => {
  const result = fs.readFileSync(
    path.resolve(__dirname, '..', '..', 'dist', 'index.html'),
    'utf-8',
  );
  res.send(result);
});

// app.listen(PORT);
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT);
console.log(`Server running at ${PORT}`);