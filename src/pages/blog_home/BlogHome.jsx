import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore, useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';

import { renderNotFound } from '../../domains/error/error_actions';

import { fetchBlog } from '../../domains/blog/blog_actions';
import { BlogHeader } from '../../domains/blog/components/BlogHeader';

import { fetchEntryList } from '../../domains/entry_list/entry_list_actions';
import { EntryList } from '../../domains/entry_list/components/EntryList';

import { Main } from '../../foundation/components/Main';

export default function BlogHome() {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const blogRedux = useSelector((state) => state.blog);
  const entryListRedux = useSelector((state) => state.entryList);
  const store = useStore();

  const blog = blogRedux ? blogRedux.toJS() : blogRedux;
  const entryList = entryListRedux ? entryListRedux.toJS() : [];

  useEffect(() => {
    (async () => {
      try {
        const { blogReducer } = await import('../../domains/blog/blog_reducer');
        const { entryListReducer } = await import(
          '../../domains/entry_list/entry_list_reducer'
        );
        store.injectReducer('blog', blogReducer);
        store.injectReducer('entryList', entryListReducer);
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
