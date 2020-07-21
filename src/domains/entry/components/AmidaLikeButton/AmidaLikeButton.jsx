import React from 'react';
import { AmidaLikeIcon } from '../AmidaLikeIcon';

export function AmidaLikeButton({ likeCount, onClick }) {
  return (
    <button type="button" className="entry-AmidaLikeButton" onClick={onClick}>
      <AmidaLikeIcon />
      <span className="entry-AmidaLikeButton__count">{likeCount}</span>
    </button>
  );
}
