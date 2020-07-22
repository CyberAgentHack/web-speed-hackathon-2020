import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';

import { renderNotFound } from '../../domains/error/error_actions';

import { fetchBlog } from '../../domains/blog/blog_actions';
import { BlogHeader } from '../../domains/blog/components/BlogHeader';

import { fetchEntryList } from '../../domains/entry_list/entry_list_actions';
import { EntryList } from '../../domains/entry_list/components/EntryList';

import { Main } from '../../foundation/components/Main';
import { blogReducer } from '../../domains/blog/blog_reducer';

export default function BlogHome() {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const blogRedux = useSelector((state) => state.blog);
  const entryList = useSelector((state) => state.entryList.toJS());

  const blog = blogRedux ? blogRedux.toJS() : blogRedux;

  useEffect(() => {
    (async () => {
      try {
        store.injectReducer('blog', blogReducer);
        await fetchBlog({ dispatch, blogId });
        await fetchEntryList({ dispatch, blogId });
      } catch {
        await renderNotFound({ dispatch });
      }
    })();
  }, [dispatch, blogId]);

  return (
    <>
      <Helmet>
        <title>
          {blog === undefined
            ? 'Amida Blog: あみぶろ'
            : `${blog.nickname} - Amida Blog: あみぶろ`}
        </title>
      </Helmet>
      <div className="BlogHome">
        <BlogHeader blog={blog} />

        <Main>
          <section className="BlogHome__entry-list">
            <h2 className="BlogHome__entry-list-title">記事一覧</h2>
            <EntryList blogId={blogId} list={entryList} />
          </section>
        </Main>
      </div>
    </>
  );
}
