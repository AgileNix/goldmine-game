import terminalKit from 'terminal-kit';

export const term = terminalKit.terminal;
export const config = {
  tickSpeed: 100,
  isInitCompleted: false,
  isProducerListUpdated: true,
  gold: 0,
  productionRate: 0,
  producers: [
    { id: 1, title: 'Miner', cost: 10, growthRate: 1.13, baseProduction: 0.1, count: 0 },
    { id: 2, title: 'Adventurer', cost: 100, growthRate: 1.17, baseProduction: 1, count: 0 },
    { id: 3, title: 'Professional', cost: 1200, growthRate: 1.14, baseProduction: 9, count: 0 },
    { id: 4, title: 'Manager', cost: 11000, growthRate: 1.14, baseProduction: 55, count: 0 },
    { id: 5, title: 'Extractor', cost: 150000, growthRate: 1.11, baseProduction: 210, count: 0 },
    { id: 6, title: 'Cartel', cost: 1000000, growthRate: 1.15, baseProduction: 1000, count: 0 },
    { id: 7, title: 'Factory', cost: 11000000, growthRate: 1.15, baseProduction: 7000, count: 0 },
    { id: 8, title: 'Monopoly', cost: 52000000, growthRate: 1.14, baseProduction: 52000, count: 0 },
    { id: 9, title: 'Robot', cost: 100000000, growthRate: 1.17, baseProduction: 252000, count: 0 },
  ],
}
