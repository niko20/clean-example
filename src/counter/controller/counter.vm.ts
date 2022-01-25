import { CounterStore } from "../domain/counter-store.model";

const useCounterViewModel = (state: CounterStore) => {
  

  return {
    loadInit: state.listCounters,
    counters: state.counters
  }
}

export { useCounterViewModel };