import React from 'react';

import { Main } from '../../foundation/components/Main';

export function NotFound() {
  return (
    <Main>
      <div className="NotFound">
        <h1 className="NotFound__text">404 Not Found</h1>
        <img src="/assets/budda.gif" alt="" className="NotFound__img" />
        <a
          className="NotFound__img-credit"
          href="https://giphy.com/gifs/unborn-infinite-emptiness-timeless-eternity-l0HlFC4aylrLq6Zy0"
          target="_blank"
          rel="noopener noreferrer"
        >
          By William Wolfgang Wunderbar (giphy.com)
        </a>
      </div>
    </Main>
  );
}
