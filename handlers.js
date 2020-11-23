import { formatNumber, updateGold, updateProducerList, checkInitCompleted } from './functions.js';

export const handleKeyPress = (term, state) => (name, matches, data) => {
  const key = String.fromCharCode(data.code);
  if (key === 'g' || key === 'G') {
    state.gold++;
  } else if (Number(key) >= 0 && Number(key) <= 9) {
    const producer = state.producers.find(item => key.includes(item.id));
    if (producer && state.gold >= producer.cost) {
      state.gold -= producer.cost;
      producer.cost *= producer.growthRate;
      producer.count++;
      state.isProducerListUpdated = false;
      state.productionRate += producer.baseProduction * state.tickSpeed / 1000;
      term.moveTo(25, 3);
      term.green(formatNumber(state.productionRate * 1000 / state.tickSpeed) + '     ');
    }
  }

  if (!state.isInitCompleted && state.gold >= 10) {
    checkInitCompleted(term, state);
  }
  if (!state.isProducerListUpdated) {
    updateProducerList(term, state);
  }
}

export const handleStateChange = (term, state) => () => {
  updateGold(term, state);
};
