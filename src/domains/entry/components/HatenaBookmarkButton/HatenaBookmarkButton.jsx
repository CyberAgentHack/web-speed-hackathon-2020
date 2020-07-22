import React, { useEffect } from 'react';

const HATENA_SDK = 'https://b.st-hatena.com/js/bookmark_button.js';

export const HatenaBookmarkButton = ({ location }) => {
  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.src = HATENA_SDK;
    document.body.appendChild(scriptEl);

    return () => {
      scriptEl.remove();
    };
  }, []);

  return (
    <div className="entry-HatenaBookmarkButton">
      <a
        href="https://b.hatena.ne.jp/entry/"
        className="hatena-bookmark-button"
        data-hatena-bookmark-layout="basic-label-counter"
        data-hatena-bookmark-lang="ja"
        title="このエントリーをはてなブックマークに追加"
      >
        <img
          src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          width="20"
          height="20"
          style={{ border: 'none' }}
        />
      </a>
    </div>
  );
};
