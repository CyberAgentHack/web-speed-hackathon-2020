import React from 'react';
import chunk from 'lodash/chunk';
import map from 'lodash/map';

import { BlogCard } from '../BlogCard';

export function BlogCardList({ list, columnCount }) {
  const rows = _.chunk(list, columnCount);

  return (
    <div className="blog-list-BlogCardList">
      {_.map(rows, (rowItems, i) => (
        <div key={i} className="blog-list-BlogCardList__row">
          {_.map(rowItems, (item, j) => (
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
