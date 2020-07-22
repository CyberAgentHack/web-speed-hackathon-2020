import React from 'react';
import AmidaPng from '../../../assets/amida.png';

const AmidaImage = React.memo(() => {
  return <img src={AmidaPng} className="Entrance__hero-logo" alt="" />;
});

export default AmidaImage;
