import { SET_SEARCH } from "./controls-actions"

const initialState = {
	search: '',
	region: ''
}

export const controlsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_SEARCH:
			return {
				...state, 
				search: payload
			}
		// case SET_LOADING:
		// 	return {
		// 		...state, 
		// 		status: 'loading',
		// 		error: null
		// 	}
		// case SET_ERROR:
		// 	return {
		// 		...state, 
		// 		status: 'rejected',
		// 		error: payload
		// 	}
		default:
			return state
	}
}
