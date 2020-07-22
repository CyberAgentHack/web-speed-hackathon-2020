import { fetch } from '../../foundation/gateway';
import { replaceCdnDomain } from '../../utils/valid';

export const ACTION_BLOG_LIST_FETCHED = 'BLOG_LIST_FETCHED';

export async function fetchBlogList({ dispatch }) {
  const blogs = await fetch(`/api/blogs`);

  const replaced = blogs.map((blog) => {
    return {
      ...blog,
      image: replaceCdnDomain(blog.image, '?&width=300'),
    };
  });

  dispatch({
    type: ACTION_BLOG_LIST_FETCHED,
    data: {
      blogs: replaced,
    },
  });
}
