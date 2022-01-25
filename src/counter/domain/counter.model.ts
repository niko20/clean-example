interface Counter {
  id: number;
  name: string;
  count: number;
}


const increment = (counter: Counter): Counter => {
  return ({ ...counter, count: counter.count + 1 })
}

const decrement = (counter: Counter): Counter => {
  return { ...counter, count: counter.count - 1 }
}

export { increment, decrement };
export type { Counter };