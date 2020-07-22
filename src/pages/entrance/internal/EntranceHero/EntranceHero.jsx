import React, { useEffect, useState } from 'react';

import { ProportionalImage } from '../../../../foundation/components/ProportionalImage';
import AmidaImage from '../../../../assets/amida.png';
import Amida2Image from '../../../../assets/amida2.png';

export const EntranceHero = () => {
  const heroTextJaList = ['あみぶろ', '阿弥ぶろ', 'アミブロ'];
  const [heroTextJa, setHeroTextJa] = useState(heroTextJaList[0]);

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

  return (
    <section className="Entrance__hero">
      <div className="Entrance__hero-bg">
        <ProportionalImage src={Amida2Image} alt="" boxAspectRatio={9 / 16} />
      </div>
      <div className="Entrance__hero-contents">
        <img
          src={AmidaImage}
          className="Entrance__hero-logo"
          alt=""
          loading="lazy"
        />
        <p className="Entrance__hero-text">
          <span className="Entrance__hero-text-en">Amida Blog:</span>
          <span className="Entrance__hero-text-ja">{heroTextJa}</span>
        </p>
      </div>
    </section>
  );
};
