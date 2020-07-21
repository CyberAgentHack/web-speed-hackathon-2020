import React from 'react';

function Headline({ level, text }) {
  const tagName = `h${level}`;
  const el = React.createElement(
    tagName,
    { className: `entry-EntryView__headline-${level}` },
    text,
  );
  return el;
}

function Paragraph({ text }) {
  return <p className="entry-EntryView__paragraph">{text}</p>;
}

function Link({ url, text }) {
  return (
    <a className="entry-EntryView__link" href={url}>
      {text}
    </a>
  );
}

function Image({ url, width, height, caption }) {
  return (
    <div className="entry-EntryView__figure-container">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="entry-EntryView__figure-link"
      >
        <figure className="entry-EntryView__figure">
          <img
            className="entry-EntryView__img"
            src={url}
            style={{ width, height }}
            alt={caption}
          />
          <figcaption className="entry-EntryView__figcaption">
            {caption}
          </figcaption>
        </figure>
      </a>
    </div>
  );
}

function Video({ url, width, height }) {
  return (
    <video
      className="entry-EntryView__video"
      src={url}
      style={{ width, height }}
      controls
    />
  );
}

function Embed({ html }) {
  return (
    <div
      className="entry-EntryView__embed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function EntryView({ items }) {
  return (
    <div className="entry-EntryView">
      {items.map((item, i) => {
        if (item.type === 'headline') {
          return <Headline key={i} {...item.data} />;
        }

        if (item.type === 'paragraph') {
          return <Paragraph key={i} {...item.data} />;
        }

        if (item.type === 'link') {
          return <Link key={i} {...item.data} />;
        }

        if (item.type === 'image') {
          return <Image key={i} {...item.data} />;
        }

        if (item.type === 'video') {
          return <Video key={i} {...item.data} />;
        }

        if (item.type === 'embed') {
          return <Embed key={i} {...item.data} />;
        }

        return <React.Fragment key={i}></React.Fragment>;
      })}
    </div>
  );
}
