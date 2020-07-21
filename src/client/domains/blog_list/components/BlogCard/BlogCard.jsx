import React from 'react';
import { Link } from 'react-router-dom';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export function BlogCard({ blog }) {
  return (
    <Link className="blog-list-BlogCard" to={`/${blog.blog_id}`}>
      <div className="blog-list-BlogCard__thumbnail">
        <ProportionalImage
          src={blog.image}
          alt=""
          width={1920}
          height={1080}
          maxWidth={1920}
          unit={120}
          sizes="20vw"
          roundedAsCardThumbnail
        />
      </div>
      <p className="blog-list-BlogCard__title">{blog.nickname}</p>
    </Link>
  );
}
