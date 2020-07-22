import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

// Nullable
function EntryList({ blogId, list: listOrEmpty }) {
  const list =
    listOrEmpty.length === 0
      ? Array(20).fill({ publish_flag: 'open' })
      : listOrEmpty;

  return (
    <ul className="entry-list-EntryList">
      {list
        .filter((entry) => entry?.publish_flag === 'open')
        .map((entry, i) => {
          const publishedAt = entry ? dayjs(entry?.published_at) : null;

          return (
            <li key={i} className="entry-list-EntryList__entry">
              <Link
                to={`/${blogId}/entry/${entry?.entry_id}`}
                className="entry-list-EntryList__entry-inner"
              >
                <div className="entry-list-EntryList__thumbnail">
                  <ProportionalImage
                    src={entry?.thumbnail}
                    alt=""
                    width={1280}
                    height={720}
                    maxWidth={340}
                    unit={60}
                    sizes="120px"
                  />
                </div>
                <div className="entry-list-EntryList__text">
                  <time
                    className="entry-list-EntryList__published-at"
                    dateTime={publishedAt?.format('YYYY-MM-DDTHH:mm:ss.SSSZ')}
                    title={publishedAt?.format('YYYY-MM-DDTHH:mm:ss.SSSZ')}
                  >
                    {publishedAt?.format('YYYY-MM-DD') ?? 'XXXX-XX-XX'}
                  </time>
                  <p className="entry-list-EntryList__title">
                    {entry?.title ?? '---'}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

const MemoizeEntryList = React.memo(EntryList);

export { MemoizeEntryList as EntryList };
