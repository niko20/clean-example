import { useEffect } from 'react';
import { Counter } from '../components';
import { useCounterViewModel } from '../controller/counter.vm';
import { useCounterStore } from '../repository/counter.store';

const CounterView = () => {
  const { counters, loadInit } = useCounterViewModel(useCounterStore())

  useEffect(() => {
    loadInit();
  }, [loadInit]);

  return (
    <>
      {counters.map((counter) => <Counter title={counter.name} counter={counter.count} id={String(counter.id)} />)}
    </>
  )
}


export default CounterView;