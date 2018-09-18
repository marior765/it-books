import * as actionTypes from './consts';

const initialState = {
    booksData: []
}

const Main = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INIT_BOOKSDATA:
        return {
            ...state,
            booksData: action.payload
        }
        default:
            return {
                ...state
            };
    }
}

export default Main;