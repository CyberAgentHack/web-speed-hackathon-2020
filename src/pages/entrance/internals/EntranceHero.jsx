import React, { useEffect, useState } from 'react';

export function EntranceHero({ text }) {
  const heroTextJaList = text;
  const [heroTextJa, setHeroTextJa] = useState(heroTextJaList[0]);

  useEffect(() => {
    if (document.getElementById('webFontStyleLink') === null) {
      const webFontStyleLink = document.createElement('link');
      webFontStyleLink.setAttribute('rel', 'stylesheet');
      webFontStyleLink.setAttribute(
        'href',
        `https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:700&display=swap&text=${heroTextJaList.join(
          '',
        )}`,
      );
      webFontStyleLink.setAttribute('id', 'webFontStyleLink');
      document.head.appendChild(webFontStyleLink);
    }
  });

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

  return <>{heroTextJa}</>;
}
