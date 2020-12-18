import { createSelector } from 'reselect';
import { movieReducer } from './reducer';

const movieSelector = state => state.movies

export const loadingSearch = createSelector(
    movieSelector,
    item => item.loadingMovie
)
export const dataSearchMovie = createSelector(
    movieSelector,
    item => item.dataMovie.results
)
export const getTotalResults = createSelector(
    movieSelector,
    item => item.dataMovie.total_results
)