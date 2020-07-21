import { fetch } from '../../foundation/gateway';

export const ACTION_COMMENT_LIST_FETCHED = 'COMMENT_LIST_FETCHED';

export async function fetchCommentList({ dispatch, blogId, entryId }) {
  const comments = await fetch(`/api/blog/${blogId}/entry/${entryId}/comments`);

  dispatch({
    type: ACTION_COMMENT_LIST_FETCHED,
    data: {
      comments,
    },
  });
}
