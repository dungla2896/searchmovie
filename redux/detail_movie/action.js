import * as types from './type';

export const getDetailMovie = (id) =>({
    type: types.GET_DETAIL_MOVIE,
    id
})
export const getDetailMovieSuccess = (data) =>({
    type: types.GET_DETAIL_MOVIE_SUCESS,
    data
})
export const getDetailMovieFailure = (error) => ({
    type: types.GET_DATAIL_MOVIE_FAILURE,
    error
})
export const loadingGetDetailMovie = (loading) => ({
    type: types.LOADING_DETAIL_MOVIE,
    loading
})