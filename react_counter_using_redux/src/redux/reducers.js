export const initialState = {
	text_length:0,
	total_hits: 0
}

export const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case 'TEXT_LENGTH':
			return{...state, text_length:action.payload}
		case 'MAINTAIN_HITS':
			return{...state, total_hits: action.payload}
		case 'RESET_ALL':
			return{...state, total_hits: 0, text_length: 0}
		default:
			return state;
	}
}

export default rootReducer;