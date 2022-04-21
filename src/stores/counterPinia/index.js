import { defineStore } from 'pinia';
import state from './state';
import actions from './actions';

export const useCounterStore = defineStore('counter', {
  state,
  actions,
});

// se for usado assim não precisa importar os arquivos
// export const useCounterStore = defineStore('counter', {
//   state: () => ({ count: 0 }),
//   actions: {
//     increment() {
//       this.count += 1;
//     },
//     decrement() {
//       this.count -= 1;
//     },
//   },
// });
