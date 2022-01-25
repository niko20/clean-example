import create from 'zustand';
import { CounterStore } from '../domain/counter-store.model';
import { increment } from '../domain/counter.model';
import { getCounters } from './counter.services';

const useCounterStore = create<CounterStore>((set, get) => ({
  counters: [],
  errorLoadCounters: false,


  listCounters: async () => {
    try {
      set({ errorLoadCounters: false });

      const countersApi = await getCounters();

      const counters = countersApi.map(counter => ({
        id: counter.id,
        name: counter.name,
        count: counter.value
      }))
  
      set({ counters });
    } catch(err) {
      set({ counters: [], errorLoadCounters: true })
    }
  },
  incrementCounter: async (id: number) => {
    const counters = [...get().counters];
    const counterIndex = counters.findIndex(counter => counter.id === id);
    const counter = counters[counterIndex];
    const newCounter = increment(counter);

    counters[counterIndex] = newCounter;

    set({ counters });
  },
  decrementCounter: () => Promise.resolve({ id: 1, count: 1, name: 'manzanas'}),
  resetCounter: () => Promise.resolve({ id: 1, count: 1, name: 'manzanas'}),
}));

export { useCounterStore };


// useViewModel(useCounterStore)