import { api } from './mockApiConfig'

export const getAllMovies = async () => {
    try {
        const resp = await api.get('/movies')
        return resp.data
    } catch (error) {
        throw error
    }
}