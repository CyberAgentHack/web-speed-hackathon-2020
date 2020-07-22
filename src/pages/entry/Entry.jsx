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
import { blogReducer } from '../../domains/blog/blog_reducer';

export default function Entry() {
  const location = useLocation();
  const { blogId, entryId } = useParams();
  const dispatch = useDispatch();
  const blogRedux = useSelector((state) => state.blog);
  const entry = useSelector((state) => state.entry.toJS());
  const commentList = useSelector((state) => state.commentList.toJS());

  const blog = blogRedux ? blogRedux.toJS() : blogRedux;

  useEffect(() => {
    (async () => {
      store.injectReducer('blog', blogReducer);
      try {
        await fetchBlog({ dispatch, blogId });
        await fetchEntry({ dispatch, blogId, entryId });
        await fetchCommentList({ dispatch, blogId, entryId });
      } catch {
        await renderNotFound({ dispatch });
      }
    })();
  }, [dispatch, blogId, entryId]);

  return (
    <>
      <Helmet>
        <title>
          {entry && blog
            ? `${entry.title} - ${blog.nickname} - Amida Blog: あみぶろ`
            : 'Amida Blog: あみぶろ'}
        </title>
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
              <EntryView items={entry.items || []} />
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
            <CommentList list={commentList || []} />
          </article>
        </Main>
      </div>
    </>
  );
}
