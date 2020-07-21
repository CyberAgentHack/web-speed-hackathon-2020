import React, { useEffect } from 'react';
import loadjs from 'loadjs';

const FACEBOOK_SDK =
  'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';

export function FacebookShareButton() {
  useEffect(() => {
    if ('FB' in globalThis) {
      globalThis.FB.XFBML.parse();
      return;
    }

    loadjs(FACEBOOK_SDK, {
      success: function() {},
      error: function(pathsNotFound) {},
      before: function(path, scriptEl) {
        /* called for each script node before being embedded */
        if (path === FACEBOOK_SDK) scriptEl.crossOrigin = 'anonymous';
      }
    });
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
