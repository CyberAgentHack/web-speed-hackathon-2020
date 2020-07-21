import React from 'react';

import { BlogDummyCard } from '../BlogDummyCard';

function chunk(orgList, count) {
  const list = [...orgList];
  const result = [];
  while (list.length) {
    result.push(list.splice(0, count))
  }
  return result;
}

export function BlogDummyCardList({ totalCount, columnCount }) {
  const rows = chunk([...Array(totalCount)], columnCount);

  return (
    <div className="blog-list-BlogDummyCardList">
      {rows.map((rowItems, i) => (
        <div key={i} className="blog-list-BlogDummyCardList__row">
          {rowItems.map((_, j) => (
            <div
            key={j}
            className="blog-list-BlogDummyCardList__column"
            style={{ width: `calc(100% / ${columnCount})` }}
          >
            <BlogDummyCard />
          </div>
        ))}
        </div>
      ))}
    </div>
  );
}
