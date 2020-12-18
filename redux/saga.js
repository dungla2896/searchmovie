import { all, call } from 'redux-saga/effects';
import { watchingMovieSaga} from './movie/saga';
import watchDetailSaga from './detail_movie/saga';

export default function* rootSaga(){
    yield all([
        call(watchDetailSaga),
        call(watchingMovieSaga),
    ])
}