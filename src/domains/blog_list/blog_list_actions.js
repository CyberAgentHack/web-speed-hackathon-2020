import { fetch } from '../../foundation/gateway';

export const ACTION_BLOG_LIST_FETCHED = 'BLOG_LIST_FETCHED';

export async function fetchBlogList({ dispatch }) {
  const blogs = await fetch(`/api/blogs`);

  dispatch({
    type: ACTION_BLOG_LIST_FETCHED,
    data: {
      blogs,
    },
  });
}
