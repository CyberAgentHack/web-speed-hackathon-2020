import React from 'react';
import classNames from 'classnames';

const isExternalUrl = (src) => /^https?:\/\//.test(src);

const optimizeSrc = (src, width) => {
  if (!isExternalUrl(src)) {
    return src;
  }
  const qs = new URLSearchParams({ w: width, f: 'auto' });
  const path = src.replace(/^https?:\/\//, '');
  return `https://cdn.statically.io/img/${path}?${qs}`;
};

const createSrcSet = (src, width, unit) => {
  if (!isExternalUrl(src)) {
    return '';
  }

  const list = [];
  while (width >= unit) {
    list.push(`${optimizeSrc(src, width)} ${width}w`);
    width = width - unit;
  }
  return list.join(',');
};

export function ProportionalImage({
  src,
  unit,
  maxWidth,
  width,
  height,
  roundedAsCardThumbnail,
  ...imageProps
}) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const onLoad = React.useCallback(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  return (
    <div
      className={classNames('foundation-ProportionalImage', {
        ['foundation-ProportionalImage--rounded-as-card-thumbnail']: roundedAsCardThumbnail,
      })}
      style={{ paddingTop: `calc(100% * ${height / width})` }}
    >
      <div
        className={classNames('foundation-ProportionalImage__inner', {
          'foundation-ProportionalImage__inner--loaded': isLoaded,
        })}
      >
        {src ? (
          <img
            className="foundation-ProportionalImage__img"
            decoding="async"
            loading="lazy"
            width={width}
            height={height}
            src={optimizeSrc(src, width)}
            srcSet={createSrcSet(src, maxWidth, unit)}
            onLoad={onLoad}
            {...imageProps}
          />
        ) : null}
      </div>
    </div>
  );
}
