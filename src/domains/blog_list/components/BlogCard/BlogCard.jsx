import React from 'react';
import { Link } from 'react-router-dom';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export const BlogCard = React.memo(
  ({ blog }) => {
    return (
      <Link className="blog-list-BlogCard" to={`/${blog.blog_id}`}>
        <div className="blog-list-BlogCard__thumbnail">
          <ProportionalImage
            src={blog.image || ''}
            alt=""
            boxAspectRatio={9 / 16}
            roundedAsCardThumbnail
          />
        </div>
        <p className="blog-list-BlogCard__title">{blog.nickname || ''}</p>
      </Link>
    );
  },
  (prev, next) => prev.blog.blog_id === next.blog.blog_id,
);
