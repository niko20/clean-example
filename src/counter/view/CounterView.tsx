import { useEffect } from 'react';
import { Counter, CreateCounter } from '../components';
import {
  NavigationBar,
  Placeholder,
  ListSection,
  Cell,
  Modal,
  useOverlay,
} from '@cornershop/chirimoya-react';
import { useCounterViewModel } from '../controller/counter.vm';
import { useCounterStore } from '../repository/counter.store';
import '@cornershop/primaries/dist/primaries/assets/fonts/primaries.css';

const CounterView = () => {
  const { counters, loadInit } = useCounterViewModel(useCounterStore());
  const { openOverlay } = useOverlay();

  const openWelcomeModal = () => {
    openOverlay({
      render: CreateCounter,
      withOutsideClick: true,
      // You can also use a wrapper to propagate aditional props. Ex:
      // render: (overlayProps: OverlayRenderProps) => (<WelcomeModal {...overlayProps} state={someState} />)
    });
  };

  useEffect(() => {
    loadInit();
  }, [loadInit]);

  return (
    <>
      {counters?.length <= 0 && (
        <Placeholder>
          <Placeholder.Title>No counters yet</Placeholder.Title>
          <Placeholder.Message>
            When I started counting my blessings, my whole life turned
            around.”—Willie Nelson
          </Placeholder.Message>
          <Placeholder.Action role="primary">Add counter</Placeholder.Action>
        </Placeholder>
      )}

      <button onClick={openWelcomeModal}>Test</button>

      {counters.length > 0 && (
        <ListSection variant="normal">
          <Cell withAction>
            <Cell.Title>Records played</Cell.Title>
            <Cell.Value>6</Cell.Value>
          </Cell>
          <Cell withAction>
            <Cell.Title>Records played</Cell.Title>
            <Cell.Value>6</Cell.Value>
          </Cell>
          <Cell withAction>
            <Cell.Title>Records played</Cell.Title>
            <Cell.Value>6</Cell.Value>
          </Cell>
          <Cell withAction>
            <Cell.Title>Records played</Cell.Title>
            <Cell.Value>6</Cell.Value>
          </Cell>
          <Cell withAction>
            <Cell.Title>Records played</Cell.Title>
            <Cell.Value>6</Cell.Value>
          </Cell>
        </ListSection>
      )}

      {/* {counters.map((counter) => (
        <Counter
          title={counter.name}
          counter={counter.count}
          id={String(counter.id)}
        />
      ))} */}
    </>
  );
};

export default CounterView;
