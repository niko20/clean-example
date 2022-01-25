import Axios from 'axios';


const HttpClient = Axios.create({
  baseURL: 'htt://localhost:3004'
})

export { HttpClient };