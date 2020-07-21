export const ACTION_ERROR_NOT_FOUND = 'NOT_FOUND';

export async function renderNotFound({ dispatch }) {
  dispatch({
    type: ACTION_ERROR_NOT_FOUND,
  });
}
