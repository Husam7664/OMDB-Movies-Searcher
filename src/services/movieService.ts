import API from './instance'
import env from '@/env'

export const GetAllSearchMovies = async (searchVal: any) => {
  try {
    return await API.instance.get(`?apikey=${env.apikey}&s=${searchVal}`)
  } catch (error) {
    return error
  }
}

export const GetMovieDetail = async (id: any) => {
  try {
    return await API.instance.get(`?apikey=${env.apikey}&i=${id}&plot`)
  } catch (error) {
    return error
  }
}
