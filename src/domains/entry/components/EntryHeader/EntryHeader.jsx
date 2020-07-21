import React from 'react';
// import moment from 'moment-timezone';
import { Link } from 'react-router-dom';

export function EntryHeader({ title, publishedAt, location }) {
  const date = new Date(publishedAt);

  const y = date.getFullYear();
  const m = `0${date.getMonth() + 1}`.slice(-2);
  const d = `0${date.getDate()}`.slice(-2);

  return (
    <div className="entry-EntryHeader">
      <h2 className="entry-EntryHeader__title">
        <Link to={location.pathname} className="entry-EntryHeader__title-link">
          {title}
        </Link>
      </h2>
      <time
        className="entry-EntryHeader__published-at"
        dateTime={date.toISOString()}
        title={date.toISOString()}
      >
        {`${y}-${m}-${d}`}
      </time>
    </div>
  );
}
