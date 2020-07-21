import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export function EntryHeader({ title, publishedAt, location }) {
  const publishedAtISO = dayjs(publishedAt).toISOString(true);

  return (
    <div className="entry-EntryHeader">
      <h2 className="entry-EntryHeader__title">
        <Link to={location.pathname} className="entry-EntryHeader__title-link">
          {title}
        </Link>
      </h2>
      <time
        className="entry-EntryHeader__published-at"
        dateTime={publishedAtISO}
        title={publishedAtISO}
      >
        {dayjs(publishedAt).format('YYYY-MM-DD')}
      </time>
    </div>
  );
}
