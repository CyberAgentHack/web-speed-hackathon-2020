import React from 'react';
import { BlogCard } from '../BlogCard';

export function BlogCardList({ list }) {
  if (list == null || list.length < 1) {
    return null;
  }
  return (
    <ul className={`blog-list-BlogCardList`}>
      {list.map((item, i) => (
        <li key={i} className="blog-list-BlogCardList__column">
          <BlogCard blog={item} />
        </li>
      ))}
    </ul>
  );
}
