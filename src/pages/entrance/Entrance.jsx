import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Helmet from 'react-helmet';

import { renderNotFound } from '../../domains/error/error_actions';

import { fetchBlogList } from '../../domains/blog_list/blog_list_actions';
import { BlogCardList } from '../../domains/blog_list/components/BlogCardList';

import { Main } from '../../foundation/components/Main';
import { ProportionalImage } from '../../foundation/components/ProportionalImage';

const shuffle = ([...arr]) => {
  let lastIndex = arr.length;
  while (lastIndex > 0) {
    const i = Math.floor(Math.random() * lastIndex--);
    [arr[lastIndex], arr[i]] = [arr[i], arr[lastIndex]];
  }
  return arr;
};

export function Entrance() {
  const dispatch = useDispatch();
  const blogList = useSelector((state) => state.blogList);
  const [pickups, setPickups] = useState([]);
  const [hasFetchFinished, setHasFetchFinished] = useState(false);
  const heroTextJaList = ['あみぶろ', '阿弥ぶろ', 'アミブロ'];
  const [heroTextJa, setHeroTextJa] = useState(heroTextJaList[0]);

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

  useEffect(() => {
    const timers = [];
    const displayDurationInTotal = 3000;
    const typingDurationInTotal = 800;

    const setText = () => {
      const text = heroTextJaList.shift();
      const length = text.length;
      const charInterval = typingDurationInTotal / length;

      setHeroTextJa('　'.repeat(length));

      for (let i = 1; i <= length; i++) {
        timers[i] = setTimeout(() => {
          setHeroTextJa(text.substring(0, i) + '　'.repeat(length - i));
        }, charInterval * i);
      }

      heroTextJaList.push(text);
    };

    setText();

    timers[0] = setInterval(() => setText(), displayDurationInTotal);

    return () => {
      clearInterval(timers[0]);
      timers.filter((_, i) => i !== 0).forEach((timer) => clearTimeout(timer));
    };
  }, []);

  if (!hasFetchFinished) {
    return (
      <Helmet>
        <title>Amida Blog: あみぶろ</title>
      </Helmet>
    );
  }

  if (pickups.length === 0 && blogList.length !== 0) {
    setPickups(shuffle(blogList.slice(0, 10)).slice(0, 4));
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
              <span className="Entrance__hero-text-ja">{heroTextJa}</span>
            </p>
          </div>
        </section>

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
      </div>
    </>
  );
}
