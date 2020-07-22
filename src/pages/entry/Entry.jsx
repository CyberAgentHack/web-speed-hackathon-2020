import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';

import { Main } from '../../foundation/components/Main';

import { renderNotFound } from '../../domains/error/error_actions';

import { fetchBlog } from '../../domains/blog/blog_actions';
import { BlogHeader } from '../../domains/blog/components/BlogHeader';

import { fetchEntry, likeEntry } from '../../domains/entry/entry_actions';
import { EntryHeader } from '../../domains/entry/components/EntryHeader/EntryHeader';
import { EntryView } from '../../domains/entry/components/EntryView';
import { EntryFooter } from '../../domains/entry/components/EntryFooter';

import { fetchCommentList } from '../../domains/comment_list/comment_list_actions';
import { CommentList } from '../../domains/comment_list/components/CommentList';

export function Entry() {
  const location = useLocation();
  const { blogId, entryId } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.toJS());
  const entry = useSelector((state) => state.entry.toJS());
  const commentList = useSelector((state) => state.commentList.toJS());
  const [hasFetchFinished, setHasFetchFinished] = useState(false);

  useEffect(() => {
    setHasFetchFinished(false);

    (async () => {
      try {
        await Promise.all([
          fetchBlog({ dispatch, blogId }),
          fetchEntry({ dispatch, blogId, entryId }),
          fetchCommentList({ dispatch, blogId, entryId }),
        ]);
      } catch {
        await renderNotFound({ dispatch });
      }

      setHasFetchFinished(true);
    })();
  }, [dispatch, blogId, entryId]);

  // if (!hasFetchFinished) {
  //   return (
  //     <Helmet>
  //       <title>Amida Blog: あみぶろ</title>
  //     </Helmet>
  //   );
  // }

  const title =
    entry.title && blog.nickname
      ? `${entry.title} - ${blog.nickname} - Amida Blog: あみぶろ`
      : 'Amida Blog: あみぶろ';

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="Entry">
        <BlogHeader blog={blog} />

        <Main>
          <article className="Entry__contents">
            <header className="Entry__header">
              <EntryHeader
                title={entry.title}
                location={location}
                publishedAt={entry.published_at}
              />
            </header>
            <section>
              <EntryView items={entry.items} />
            </section>
            <footer className="Entry__footer">
              <EntryFooter
                likeCount={entry.like_count}
                location={location}
                publishedAt={entry.published_at}
                onClickLike={() => likeEntry({ dispatch, blogId, entryId })}
              />
            </footer>
          </article>
          <article className="Entry__comment-list">
            <header className="Entry__comment-list-header">
              <h2>コメント一覧</h2>
            </header>
            <CommentList list={commentList} />
          </article>
        </Main>
      </div>
    </>
  );
}
