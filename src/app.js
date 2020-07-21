import './foundation/polyfills';

import { render } from './foundation/render';

function init() {
  if (process.env.USE_MOCK_DATA === 'true') {
    import('./foundation/gateway').then(({ setupMockAPIData }) =>
      setupMockAPIData(),
    );
  }

  render();
}

window.onload = () => {
  init();
};
