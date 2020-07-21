import './foundation/polyfills';

import { render } from './foundation/render';
// import { setupMockAPIData } from './foundation/gateway';

function init() {
  // if (process.env.USE_MOCK_DATA === 'true') {
  //   setupMockAPIData();
  // }

  render();
}

window.onload = () => {
  init();
};
