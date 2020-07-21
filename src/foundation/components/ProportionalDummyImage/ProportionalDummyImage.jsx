import React from 'react';
import classNames from 'classnames';

export function ProportionalDummyImage({
  boxAspectRatio,
  roundedAsCardThumbnail,
}) {
  return (
    <div
      className={classNames('foundation-ProportionalDummyImage', {
        ['foundation-ProportionalDummyImage--rounded-as-card-thumbnail']: roundedAsCardThumbnail,
      })}
      style={{ paddingTop: `calc(100% * ${boxAspectRatio})` }}
    >
      <div className="foundation-ProportionalDummyImage__inner" />
    </div>
  );
}
