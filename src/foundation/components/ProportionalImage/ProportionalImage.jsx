import React from 'react';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload'

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
      <div className="foundation-ProportionalImage__inner">
        <LazyLoad>
          <img className="foundation-ProportionalImage__img" {...imageProps} />
        </LazyLoad>
      </div>
    </div>
  );
}
