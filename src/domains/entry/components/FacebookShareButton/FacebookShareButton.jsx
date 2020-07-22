import React, { useEffect } from 'react';

const FACEBOOK_SDK =
  'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';

export function FacebookShareButton() {
  useEffect(() => {
    if ('FB' in globalThis) {
      globalThis.FB.XFBML.parse();
      return;
    }

    const body = document.querySelector('body');
    const script = document.createElement('script');
    script.crossOrigin = 'anonymous';
    script.src = FACEBOOK_SDK;
    body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div className="entry-FacebookShareButton">
      <div id="fb-root" />
      <div
        className="fb-like"
        data-href={globalThis.location.href}
        data-width=""
        data-layout="button_count"
        data-action="like"
        data-size="small"
        data-share="false"
      ></div>
    </div>
  );
}
