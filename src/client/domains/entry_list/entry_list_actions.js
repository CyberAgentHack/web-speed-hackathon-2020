import { fetch } from '../../foundation/gateway';

export const ACTION_ENTRY_LIST_FETCHED = 'ENTRY_LIST_FETCHED';

export async function fetchEntryList({ dispatch, blogId }) {
  const entries = await fetch(`/api/blog/${blogId}/entries`);

  dispatch({
    type: ACTION_ENTRY_LIST_FETCHED,
    data: {
      entries,
    },
  });
}
