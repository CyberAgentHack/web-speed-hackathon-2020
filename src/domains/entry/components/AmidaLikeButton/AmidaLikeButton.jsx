import * as React from 'react';
import { ThumbUpIcon } from '../../../../foundation/components/icons/ThumbUpIcon';

export function AmidaLikeButton({ likeCount, onClick }) {
  return (
    <button type="button" className="entry-AmidaLikeButton" onClick={onClick}>
      <ThumbUpIcon />
      <span className="entry-AmidaLikeButton__count">{likeCount}</span>
    </button>
  );
}
