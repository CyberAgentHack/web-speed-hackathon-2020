import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';

import { renderNotFound } from '../../domains/error/error_actions';

import { fetchBlogList } from '../../domains/blog_list/blog_list_actions';
import { BlogCardList } from '../../domains/blog_list/components/BlogCardList';

import { Main } from '../../foundation/components/Main';
import { ProportionalImage } from '../../foundation/components/ProportionalImage';
import { sliceRandom } from '../../utils/sliceRandom';
import { EntranceHero } from './internals/EntranceHero';

export function Entrance() {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList.toJS());
  const [pickups, setPickups] = useState([]);
  const [hasFetchFinished, setHasFetchFinished] = useState(false);

  useEffect(() => {
    if (blogList?.length < 1) {
      setHasFetchFinished(false);

      (async () => {
        try {
          await fetchBlogList({ dispatch });
        } catch {
          await renderNotFound({ dispatch });
        }

        setHasFetchFinished(true);
      })();
    }
  }, [dispatch]);

  if (pickups.length === 0 && blogList.length !== 0) {
    const pickups = sliceRandom(blogList, 4);
    setPickups(pickups);
  }

  return (
    <>
      <Helmet>
        <title>Amida Blog: あみぶろ</title>
      </Helmet>
      <div className="Entrance">
        <section className="Entrance__hero">
          <div className="Entrance__hero-bg">
            <ProportionalImage
              src="/assets/amida2.png"
              alt=""
              boxAspectRatio={9 / 16}
            />
          </div>
          <div className="Entrance__hero-contents">
            <img
              src="/assets/amida.png"
              className="Entrance__hero-logo"
              alt=""
            />
            <p className="Entrance__hero-text">
              <span className="Entrance__hero-text-en">Amida Blog:</span>
              <span className="Entrance__hero-text-ja">
                <EntranceHero text={['あみぶろ', '阿弥ぶろ', 'アミブロ']} />
              </span>
            </p>
          </div>
        </section>

        <Main>
          <article className="Entrance__section Entrance__pickup">
            <h2 className="Entrance__title">Pickups</h2>
            {pickups.length > 0 ? (
              <BlogCardList list={pickups} />
            ) : (
              `Loading...`
            )}
          </article>
          <article className="Entrance__section Entrance__blog-list">
            <h2 className="Entrance__title">ブログ一覧</h2>
            {blogList.length > 0 ? (
              <BlogCardList list={blogList} />
            ) : (
              `Loading...`
            )}
          </article>
        </Main>
      </div>
    </>
  );
}
