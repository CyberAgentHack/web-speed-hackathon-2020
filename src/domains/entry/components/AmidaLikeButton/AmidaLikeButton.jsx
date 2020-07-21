import React from 'react';

export function AmidaLikeButton({ likeCount, onClick }) {
  return (
    <button type="button" className="entry-AmidaLikeButton" onClick={onClick}>
      <svg
        aria-hidden="true"
        viewBox="0 0 512 512"
        style={{ display: 'inline-block', width: '1em', height: '1em' }}
      >
        <path
          fill="currentColor"
          d="M104 224H24a24 24 0 00-24 24v240a24 24 0 0024 24h80a24 24 0 0024-24V248a24 24 0 00-24-24zM64 472a24 24 0 110-48 24 24 0 010 48zM384 81.5c0 42.4-26 66.2-33.3 94.5h101.7a59.7 59.7 0 0159.6 58.1c0 18-7.5 37.2-19.4 49.2l-.2.1c9.9 23.3 8.3 56-9.3 79.5a79 79 0 01-16.3 74.7c4.3 17.6 2.2 32.6-6.2 44.7-20.4 29.3-71 29.7-113.8 29.7H344c-48.3 0-87.8-17.6-119.6-31.7-16-7.1-36.8-16-52.6-16.2a12 12 0 01-11.8-12V238.3a12 12 0 013.6-8.5c39.6-39.1 56.6-80.6 89-113.1 14.9-14.8 20.3-37.2 25.5-59C282.5 39.4 291.8 0 312 0c24 0 72 8 72 81.5z"
        />
      </svg>
      <span className="entry-AmidaLikeButton__count">{likeCount}</span>
    </button>
  );
}
