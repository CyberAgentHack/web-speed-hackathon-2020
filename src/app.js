import './foundation/polyfills';

import { render } from './foundation/render';

function init() {
  render();
}

window.onload = () => {
  init();
};
