import React, { useEffect } from 'react';

const TWITTER_SDK = 'https://platform.twitter.com/widgets.js';

export function TwitterShareButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', TWITTER_SDK);
    script.setAttribute('defer', true);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const href = `https://twitter.com/intent/tweet?
  original_referer=http%3A%2F%2Flocalhost%3A3000%2Fb0007%2Fentry%2Fe0039&ref_src=twsrc%5Etfw&text=%E6%97%A5%E8%A8%98%20%2339%20-%20Mock%20User%207%20-%20Amida%20Blog%3A%20%E3%81%82%E3%81%BF%E3%81%B6%E3%82%8D&tw_p=tweetbutton&url=http%3A%2F%2Flocalhost%3A3000%2Fb0007%2Fentry%2Fe0039`;

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
