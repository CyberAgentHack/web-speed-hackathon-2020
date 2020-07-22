import React from 'react';
import chunk from 'lodash.chunk';

import { BlogCard } from '../BlogCard';

export function BlogCardList({ list, columnCount }) {
  const rows = chunk(list, columnCount);

  return (
    <div className="blog-list-BlogCardList">
      {rows.map((rowItems, i) => (
        <div key={i} className="blog-list-BlogCardList__row">
          {rowItems.map((item, j) => (
            <div
              key={j}
              className="blog-list-BlogCardList__column"
              style={{ width: `calc(100% / ${columnCount})` }}
            >
              <BlogCard blog={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
