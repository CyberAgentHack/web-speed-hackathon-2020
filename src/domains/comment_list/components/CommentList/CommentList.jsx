import * as React from 'react';

import { CommentListItem } from '../CommentListItem';

export const CommentList = ({ list }) => {
  return (
    <ul>
      {list.map((comment, i) => (
        <li key={i} className="comment-CommentList__item">
          <CommentListItem comment={comment} />
        </li>
      ))}
    </ul>
  );
};
