import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';
import shuffle from 'lodash.shuffle';

import { renderNotFound } from '../../domains/error/error_actions';
import { fetchBlogList } from '../../domains/blog_list/blog_list_actions';
import { BlogCardList } from '../../domains/blog_list/components/BlogCardList';
import { Main } from '../../foundation/components/Main';
import { EntranceHero } from './internal/EntranceHero';

export const Entrance = () => {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList.toJS());
  const [pickups, setPickups] = useState([]);
  const [hasFetchFinished, setHasFetchFinished] = useState(false);

  useEffect(() => {
    setHasFetchFinished(false);

    (async () => {
      try {
        await fetchBlogList({ dispatch });
      } catch {
        await renderNotFound({ dispatch });
      }

      setHasFetchFinished(true);
    })();
  }, [dispatch]);

  if (hasFetchFinished && pickups.length === 0 && blogList.length !== 0) {
    setPickups(shuffle(blogList.slice(0, 10)).slice(0, 4));
  }

  return (
    <>
      <Helmet>
        <title>Amida Blog: あみぶろ</title>
      </Helmet>
      <div className="Entrance">
        <EntranceHero />
        {hasFetchFinished ? (
          <Main>
            <article className="Entrance__section Entrance__pickup">
              <h2 className="Entrance__title">Pickups</h2>
              <BlogCardList list={pickups} columnCount={4} />
            </article>
            <article className="Entrance__section Entrance__blog-list">
              <h2 className="Entrance__title">ブログ一覧</h2>
              <BlogCardList list={blogList} columnCount={4} />
            </article>
          </Main>
        ) : null}
      </div>
    </>
  );
};
