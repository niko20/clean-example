
import s from './Counter.module.css';

type CounterProps = {
  title: string;
  id: string;
  counter: number;

}

const Counter = ({ title, counter, id}: CounterProps) => {
  return (
    <article className={s.counter}>
      <header>
        <h2 className={s.title}>{title}</h2>
        <span className={s.key}>{id}</span>
      </header>
      <div className={s.counterContainer}>
        <button className={s.button}>Dec</button>
        <span className={s.value}>{counter}</span>
        <button className={s.button}>Inc</button>
      </div>
    </article>
  )
}

export default Counter;
