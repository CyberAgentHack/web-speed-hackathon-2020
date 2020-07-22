import React, { useEffect } from 'react';

const TWITTER_SDK = 'https://platform.twitter.com/widgets.js';

export const TwitterShareButton = () => {
  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.src = TWITTER_SDK;
    document.body.appendChild(scriptEl);

    return () => {
      scriptEl.remove();
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
};
