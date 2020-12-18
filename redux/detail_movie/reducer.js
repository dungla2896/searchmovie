import * as types from './type';

const initialState = {
    detailLoading: null,
    detailMovie: [],
    errorDetailMovie: null,
}

export const detailReducer = (state = initialState, action) =>{
    switch(action.type){
        // case types.GET_DETAIL_MOVIE:
        //     return{
        //         ...state,
        //     }
        case types.LOADING_DETAIL_MOVIE:
            return{
                ...state,
                ...{detailLoading: action.loading}
            }
        case types.GET_DETAIL_MOVIE_SUCESS:
            return{
                ...state,
                ...{ detailMovie: action.data, errorDetailMovie: null}
            }
        case types.GET_DATAIL_MOVIE_FAILURE:
            return{
                ...state,
                ...{  detailMovie: null, errorDetailMovie: action.error}
            }
        default:
            return state;
    }
}