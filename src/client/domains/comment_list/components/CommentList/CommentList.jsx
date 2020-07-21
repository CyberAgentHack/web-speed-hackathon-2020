import React from 'react';

import { CommentListItem } from '../CommentListItem';

export function CommentList({ list }) {
  return (
    <ul>
      {list.map((comment, i) => (
        <li key={i} className="comment-CommentList__item">
          <CommentListItem comment={comment} />
        </li>
      ))}
    </ul>
  );
}
