import { handleStateChange, handleKeyPress } from './handlers.js';

import { init } from './functions.js';

export const startMiningGame = (term, state) => {
  init(term);

  term.on('key', handleKeyPress(term, state));

  setInterval(handleStateChange(term, state), state.tickSpeed);
}