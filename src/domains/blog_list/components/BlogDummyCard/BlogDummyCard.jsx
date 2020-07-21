import React from 'react';
import { Link } from 'react-router-dom';

import { ProportionalDummyImage } from '../../../../foundation/components/ProportionalDummyImage';

export function BlogDummyCard() {
  return (
    <div className="blog-list-BlogDummyCard">
      <div className="blog-list-BlogDummyCard__thumbnail">
        <ProportionalDummyImage
          boxAspectRatio={9 / 16}
          roundedAsCardThumbnail
        />
      </div>
      <p className="blog-list-BlogDummyCard__title"></p>
    </div>
  );
}
