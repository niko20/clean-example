import { HttpClient } from "../../lib/http-client";
import { CounterAPI } from "../domain/counter-api.model";

const getCounters = async (): Promise<CounterAPI[]> => HttpClient.get<CounterAPI[]>('/counters').then(res =>  res.data)

export { getCounters };