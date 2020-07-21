import './foundation/polyfills';

import { render } from './foundation/render';
import { setupMockAPIData } from './foundation/gateway';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

function init() {
  if (process.env.USE_MOCK_DATA === 'true') {
    setupMockAPIData();
  }

  dayjs.extend(relativeTime);

  render();
}

window.onload = () => {
  init();
};
