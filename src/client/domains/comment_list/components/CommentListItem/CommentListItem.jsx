import React from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export function CommentListItem({ comment }) {
  const postedAt = dayjs(comment.posted_at);

  return (
    <article
      id={`comment-${comment.comment_id}`}
      className="comment-CommentListItem"
    >
      <div className="comment-CommentListItem__avatar">
        <ProportionalImage
          src={comment.commenter.image}
          width={50}
          height={50}
          maxWidth={100}
          unit={50}
          sizes="50px"
        />
      </div>
      <div className="comment-CommentListItem__body">
        <h3 className="comment-CommentListItem__commenter">
          {comment.commenter.user_name}
        </h3>
        <p className="comment-CommentListItem__comment">{comment.comment}</p>
        <footer className="comment-CommentListItem__footer">
          <Link to={`#comment-${comment.comment_id}`}>
            <time
              dateTime={postedAt.format('YYYY-MM-DDTHH:mm:ss.SSSZ')}
              title={postedAt.format('YYYY-MM-DDTHH:mm:ss.SSSZ')}
            >
              {postedAt.fromNow()}
            </time>
          </Link>
        </footer>
      </div>
    </article>
  );
}
