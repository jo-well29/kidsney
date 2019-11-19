import Axios from 'axios'
const BASE_URL = `https://5dced59a75f9360014c2642f.mockapi.io/api/v1/movies`

export const api = Axios.create({
    baseURL: BASE_URL
})