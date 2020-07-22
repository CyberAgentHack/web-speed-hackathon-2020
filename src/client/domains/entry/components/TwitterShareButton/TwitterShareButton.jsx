import React, { useEffect } from 'react';

const TWITTER_SDK = 'https://platform.twitter.com/widgets.js';

function TwitterShareButton() {
  useEffect(() => {
    const scriptEl = document.createElement('script');
    Object.assign(scriptEl, {
      src: TWITTER_SDK,
    });
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
}

const MemoizedTwitterShareButton = React.memo(TwitterShareButton);

export { MemoizedTwitterShareButton as TwitterShareButton };
