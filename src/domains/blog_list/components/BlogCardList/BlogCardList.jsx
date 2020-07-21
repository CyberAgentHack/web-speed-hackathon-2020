import React from 'react';

import { chunk } from '../../../../foundation/util_function/chunk';
import { BlogCard } from '../BlogCard';

export function BlogCardList({ list, columnCount }) {
  const itemList = list.length ? list : [{}, {}, {}, {}];
  const rows = chunk(itemList, columnCount);

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
