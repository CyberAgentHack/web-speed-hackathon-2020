import React from 'react';

import { CommentListItem } from '../CommentListItem';
import { map } from '../../../../foundation/helpers/map';

export function CommentList({ list }) {
  return (
    <ul>
      {map(list, (comment, i) => (
        <li key={i} className="comment-CommentList__item">
          <CommentListItem comment={comment} />
        </li>
      ))}
    </ul>
  );
}
