import React from 'react';

import { BlogCard } from '../BlogCard';

function chunk(orgList, count) {
  const list = [...orgList];
  const result = [];
  while (list.length) {
    result.push(list.splice(0, count))
  }
  return result;
}

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
