import { fetch } from '../../foundation/gateway';

export const ACTION_BLOG_FETCHED = 'BLOG_FETCHED';

export async function fetchBlog({ dispatch, blogId }) {
  const blog = await fetch(`/api/blog/${blogId}`);

  dispatch({
    type: ACTION_BLOG_FETCHED,
    data: {
      blog,
    },
  });
}
