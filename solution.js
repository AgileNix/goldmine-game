#! node --harmony-top-level-await --experimental-json-modules --no-warnings

import { startMiningGame } from './gameEngine.js';
import { term, config } from './constants.js';

startMiningGame(term, config);