import * as types from './types';

// Initial (starting) state
export const initialState = {
  currentTime: new Date().toString(),
  currentName:["Rahul"]
}

// Our root reducer starts with the initial state
// and must return a representation of the next state
export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_NEW_TIME:
            return{...state,currentTime:action.payload}
        case types.FETCH_NAME:
            const names = state.currentName.concat(action.payload)
            console.log(names)            
            return{...state,currentName:names}
        default:
            return state;
    }
}
export default rootReducer
