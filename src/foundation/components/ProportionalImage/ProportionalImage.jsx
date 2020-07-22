import React from 'react';
import classNames from 'classnames';
import LazyLoad from 'react-lazy-load';

export function ProportionalImage({
  boxAspectRatio,
  roundedAsCardThumbnail,
  ...imageProps
}) {
  return (
    <div
      className={classNames('foundation-ProportionalImage', {
        ['foundation-ProportionalImage--rounded-as-card-thumbnail']: roundedAsCardThumbnail,
      })}
      style={{ paddingTop: `calc(100% * ${boxAspectRatio})` }}
    >
      <LazyLoad>
        <div className="foundation-ProportionalImage__inner">
          <img className="foundation-ProportionalImage__img" {...imageProps} />
        </div>
      </LazyLoad>
    </div>
  );
}
