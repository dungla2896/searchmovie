import { combineReducers } from 'redux'
import { counterReducer } from './counter/reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { movieReducer} from './movie/reducer';
import { detailReducer } from './detail_movie/reducer';

const configPersistCounter = {
  key: 'counter_persist',
  storage,
  whitelist: ['count']
}
const configPesistMovies = {
  key: 'movies_persist',
  storage,
  whitelist: ['dataMovie']
}
const rootReducer = combineReducers({
  counter: persistReducer(configPersistCounter, counterReducer),
  movies: persistReducer(configPesistMovies, movieReducer),
  detail: detailReducer,
})
export default rootReducer