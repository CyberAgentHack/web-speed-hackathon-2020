import React, { useEffect } from 'react';
import $ from 'jquery';

const TWITTER_SDK = 'https://platform.twitter.com/widgets.js';

export function TwitterShareButton() {
  useEffect(() => {
    const script$ = $(`<script src=${TWITTER_SDK}></script>`).appendTo('body');

    return () => {
      script$.remove();
    };
  }, []);

  return (
    <div className="entry-TwitterShareButton">
      <a
        className="twitter-share-button"
        href="https://twitter.com/intent/tweet"
      >
        Tweet
      </a>
    </div>
  );
}
