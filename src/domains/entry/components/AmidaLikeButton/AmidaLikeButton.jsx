import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';

export function AmidaLikeButton({ likeCount, onClick }) {
  return (
    <button type="button" className="entry-AmidaLikeButton" onClick={onClick}>
      <FontAwesomeIcon icon={faThumbsUp} />
      <span className="entry-AmidaLikeButton__count">{likeCount}</span>
    </button>
  );
}
