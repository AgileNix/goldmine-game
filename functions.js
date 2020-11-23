export const formatNumber = (value) => {
  const units = [ '', 'K', 'M', 'B', 'T' ];
  const charCodeA = 'a'.charCodeAt(0);
  let unit;
  if (value < 1000) {
    return String(value.toFixed(1));
  }
  const n = Math.floor(Math.log(value) / Math.log(1000));
  const m = value / Math.pow(1000, n);

  if (n < units.length) {
    unit = units[n];
  } else {
    const unitInt = n - units.length;
    const secondUnit = unitInt % 26;
    const firstUnit = unitInt / 26;
    unit = String.fromCharCode(firstUnit + charCodeA) + String.fromCharCode(secondUnit + charCodeA);
  }

  return Number(Math.floor(m * 100) / 100).toFixed(2) + unit;
}

export const updateProducerList = (term, state) => {
  term.moveTo(1, 5);
  let hasPrintedLastProducer = false;
  state.producers.map(({ title, count, baseProduction, cost }) => {
    if (!hasPrintedLastProducer) {
      term(`${title}: ${count} | Production per second: ${baseProduction.toFixed(1)} | Cost: ${formatNumber(cost) + '    '}\n`);
      if (count === 0) {
        hasPrintedLastProducer = true;
      }
    }
  });
  state.isProducerListUpdated = true;
}

export const updateGold = (term, state) => {
  term.moveTo(25, 2);
  term.eraseLineAfter();
  term.bold.yellow(formatNumber(state.gold) + '     ');

  state.gold += state.productionRate;
}

export const init = (term) => {
  term.clear();
  term.hideCursor();
  term.grabInput();
  term(`Welcome to the mining game! Press G to start.\n`);
}

export const checkInitCompleted = (term, state) => {
  term.moveTo(1, 1);
  term.eraseLineAfter();
  term(`You can purchase producers by clicking the number button (1, 2, 3, ...)`);
  term.moveTo(1, 2);
  term(`GOLD:`);
  term.moveTo(1, 3);
  term(`PRODUCTION RATE:`);
  state.isInitCompleted = true;
  state.isProducerListUpdated = false;
}

