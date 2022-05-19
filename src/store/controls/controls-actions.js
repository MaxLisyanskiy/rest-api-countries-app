export const SET_SEARCH = '@@controls/SET_SEARCH'
// export const SET_LOADING = '@@countries/SET_LOADING'
// export const SET_ERROR = '@@countries/SET_ERROR'

export const setSearch = search => ({
	type: SET_SEARCH,
	payload: search,
})

// export const setLoading = () => ({
// 	type: SET_LOADING,
// })

// export const setError = err => ({
// 	type: SET_ERROR,
// 	payload: err,
// })

// export const loadingCountries = () => (dispatch, _, { client, api }) => {
// 		dispatch(setLoading())

// 		client
// 			.get(api.ALL_COUNTRIES)
// 			.then(({ data }) => dispatch(setCountries(data)))
// 			.catch(err => dispatch(setError(err.message)))
// 	}
