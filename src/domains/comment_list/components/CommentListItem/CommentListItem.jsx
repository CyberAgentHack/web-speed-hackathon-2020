import * as React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'react-router-dom';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

dayjs.extend(relativeTime);

export const CommentListItem = ({ comment }) => {
  const postedAt = dayjs(comment.posted_at).format('YYYY-MM-DDTHH:mm:ss.SSSZ');

  return (
    <article
      id={`comment-${comment.comment_id}`}
      className="comment-CommentListItem"
    >
      <div className="comment-CommentListItem__avatar">
        <ProportionalImage src={comment.commenter.image} boxAspectRatio={1} />
      </div>
      <div className="comment-CommentListItem__body">
        <h3 className="comment-CommentListItem__commenter">
          {comment.commenter.user_name}
        </h3>
        <p className="comment-CommentListItem__comment">{comment.comment}</p>
        <footer className="comment-CommentListItem__footer">
          <Link to={`#comment-${comment.comment_id}`}>
            <time dateTime={postedAt} title={postedAt}>
              {dayjs(comment.posted_at).fromNow()}
            </time>
          </Link>
        </footer>
      </div>
    </article>
  );
};
