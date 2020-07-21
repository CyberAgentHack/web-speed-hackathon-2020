import { fetch, post } from '../../foundation/gateway';

export const ACTION_ENTRY_FETCHED = 'ENTRY_FETCHED';
export const ACTION_LIKE_UPDATED = 'LIKE_UPDATED';

export async function fetchEntry({ dispatch, blogId, entryId }) {
  const entry = await fetch(`/api/blog/${blogId}/entry/${entryId}`);

  dispatch({
    type: ACTION_ENTRY_FETCHED,
    data: {
      entry,
    },
  });
}

export async function likeEntry({ dispatch, blogId, entryId }) {
  await post(`/api/blog/${blogId}/entry/${entryId}/like`);

  const entry = await fetch(`/api/blog/${blogId}/entry/${entryId}`);
  const latestLikeCount = entry.like_count;

  dispatch({
    type: ACTION_LIKE_UPDATED,
    data: {
      likeCount: latestLikeCount,
    },
  });
}
