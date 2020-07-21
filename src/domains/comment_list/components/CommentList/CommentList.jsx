import React from 'react';
import _ from 'lodash';

import { CommentListItem } from '../CommentListItem';

export function CommentList({ list }) {
  return (
    <ul>
      {_.map(list, (comment, i) => (
        <li key={i} className="comment-CommentList__item">
          <CommentListItem comment={comment} />
        </li>
      ))}
    </ul>
  );
}
