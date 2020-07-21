import React from 'react';
import moment from 'moment-timezone';
import { Link } from 'react-router-dom';

export function EntryHeader({ title, publishedAt, location }) {
  return (
    <div className="entry-EntryHeader">
      <h2 className="entry-EntryHeader__title">
        <Link to={location.pathname} className="entry-EntryHeader__title-link">
          {title}
        </Link>
      </h2>
      <time
        className="entry-EntryHeader__published-at"
        dateTime={moment(publishedAt).toISOString(true)}
        title={moment(publishedAt).toISOString(true)}
      >
        {moment(publishedAt).format('YYYY-MM-DD')}
      </time>
    </div>
  );
}
