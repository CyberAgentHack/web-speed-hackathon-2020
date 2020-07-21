import React from 'react';
// import moment from 'moment-timezone';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'react-router-dom';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';

export function CommentListItem({ comment }) {
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
            <time
              dateTime={new Date(comment.posted_at).toISOString()}
              title={new Date(comment.posted_at).toISOString()}
            >
              {formatDistanceToNow(new Date(comment.posted_at), {
                addSuffix: true,
              })}
            </time>
          </Link>
        </footer>
      </div>
    </article>
  );
}
