import React from 'react';
import { Link } from 'react-router-dom';
// import moment from 'moment-timezone';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export function EntryList({ blogId, list }) {
  return (
    <ul className="entry-list-EntryList">
      {list
        .filter((entry) => entry.publish_flag === 'open')
        .map((entry, i) => {
          const date = new Date(entry.published_at);

          const y = date.getFullYear();
          const m = `0${date.getMonth() + 1}`.slice(-2);
          const d = `0${date.getDate()}`.slice(-2);

          return (
            <li key={i} className="entry-list-EntryList__entry">
              <Link
                to={`/${blogId}/entry/${entry.entry_id}`}
                className="entry-list-EntryList__entry-inner"
              >
                <div className="entry-list-EntryList__thumbnail">
                  <ProportionalImage
                    src={entry.thumbnail}
                    alt=""
                    boxAspectRatio={9 / 16}
                  />
                </div>
                <div className="entry-list-EntryList__text">
                  <time
                    className="entry-list-EntryList__published-at"
                    dateTime={date.toISOString()}
                    title={date.toISOString()}
                  >
                    {`${y}-${m}-${d}`}
                  </time>
                  <p className="entry-list-EntryList__title">{entry.title}</p>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
