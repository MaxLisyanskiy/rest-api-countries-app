export const SET_SEARCH = '@@controls/SET_SEARCH'
export const SET_REGION = '@@countries/SET_REGION'
// export const SET_ERROR = '@@countries/SET_ERROR'

export const setSearch = search => ({
	type: SET_SEARCH,
	payload: search,
})

export const setRegion = (region) => ({
	type: SET_REGION,
	payload: region
})

