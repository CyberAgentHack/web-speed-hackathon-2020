import { fetch } from '../../foundation/gateway';
import { replaceCdnDomain } from '../../utils/valid';

export const ACTION_ENTRY_LIST_FETCHED = 'ENTRY_LIST_FETCHED';

export async function fetchEntryList({ dispatch, blogId }) {
  const entries = await fetch(`/api/blog/${blogId}/entries`);

  const replaced = entries.map((entry) => {
    return {
      ...entry,
      thumbnail: replaceCdnDomain(entry.thumbnail, '?&width=200'),
    };
  });

  console.log(replaced);

  dispatch({
    type: ACTION_ENTRY_LIST_FETCHED,
    data: {
      entries: replaced,
    },
  });
}
