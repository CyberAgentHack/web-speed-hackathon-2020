import React from 'react';
// import classNames from 'classnames';

export function ProportionalImage({
  boxAspectRatio,
  roundedAsCardThumbnail,
  ...imageProps
}) {
  const className = roundedAsCardThumbnail
    ? 'foundation-ProportionalImage foundation-ProportionalImage--rounded-as-card-thumbnail'
    : 'foundation-ProportionalImage';

  return (
    <div
      className={className}
      style={{ paddingTop: `calc(100% * ${boxAspectRatio})` }}
    >
      <div className="foundation-ProportionalImage__inner">
        <img
          className="foundation-ProportionalImage__img"
          {...imageProps}
          loading="lazy"
        />
      </div>
    </div>
  );
}
