import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export function EntryList({ blogId, list }) {
  return (
    <ul className="entry-list-EntryList">
      {list
        .filter((entry) => entry.publish_flag === 'open')
        .map((entry, i) => {
          const { thumbnail, published_at, title, entry_id } = entry;
          const publishedAt = dayjs(published_at).toISOString(true);
          return (
            <li key={i} className="entry-list-EntryList__entry">
              <Link
                to={`/${blogId}/entry/${entry_id}`}
                className="entry-list-EntryList__entry-inner"
              >
                <div className="entry-list-EntryList__thumbnail">
                  <ProportionalImage
                    src={thumbnail}
                    alt=""
                    boxAspectRatio={9 / 16}
                  />
                </div>
                <div className="entry-list-EntryList__text">
                  <time
                    className="entry-list-EntryList__published-at"
                    dateTime={publishedAt}
                    title={publishedAt}
                  >
                    {dayjs(entry.published_at).format('YYYY-MM-DD')}
                  </time>
                  <p className="entry-list-EntryList__title">{title}</p>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
