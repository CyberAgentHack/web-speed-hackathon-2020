import { render } from './foundation/render';

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    render();
  });
} else {
  render();
}
