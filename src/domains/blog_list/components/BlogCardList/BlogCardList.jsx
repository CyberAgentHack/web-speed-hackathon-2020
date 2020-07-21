import React from 'react';
import _ from 'lodash';

import { BlogCard } from '../BlogCard';
import { map } from '../../../../foundation/helpers/map';

export function BlogCardList({ list, columnCount }) {
  const rows = _.chunk(list, columnCount);

  return (
    <div className="blog-list-BlogCardList">
      {map(rows, (rowItems, i) => (
        <div key={i} className="blog-list-BlogCardList__row">
          {map(rowItems, (item, j) => (
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
