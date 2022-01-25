import { Counter } from './counter.model'; 

interface CounterStore {
  counters: Counter[];
  errorLoadCounters: boolean;
  
  // actions
  listCounters(): Promise<void | Error>;
  incrementCounter(id: number): Promise<void | Error>;
  decrementCounter(id: number): Promise<Counter | Error>;
  resetCounter(id: number): Promise<Counter | Error>;

}

export type { CounterStore };