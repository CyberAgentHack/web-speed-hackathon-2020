import express from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));

// model payload
function createId(n) {
  const c = [];
  const len = n * 1000;
  for (let i = 0; i < len; i++) {
    c.push[i];
  }
  const result = c.sort((a, b) => a - b).join(',');
  return result;
}

class Payload {
  constructor(source) {
    this.data = JSON.stringify(source.data);
  }

  toResponse() {
    try {
      const data = JSON.parse(this.data);
      const id = createId(Math.floor(Math.random() * this.data.length));
      return {
        data,
        id,
      };
    } catch (e) {
      console.error('Failed to parse Payload to Response', e);
      throw new Error(e);
    }
  }
}

// utils
function asyncWrap(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res)
    } catch (e) {
      next(e);
    }
  };
}

// blog api
const api = axios.create({
  baseURL: 'https://web-speed-hackathon-api.herokuapp.com/api',
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