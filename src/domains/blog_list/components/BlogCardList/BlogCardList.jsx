import React from 'react';

import { BlogCard } from '../BlogCard';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  );

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
