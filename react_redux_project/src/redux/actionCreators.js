import * as types from './types';

export const fetchNewTime = () => ({
  type: types.FETCH_NEW_TIME,
  payload: new Date().toString(),
})

export const fetchName = (x) =>({
	type: types.FETCH_NAME,
	payload:x
})
export const login = (user) => ({
  type: types.LOGIN,
  payload: user
})

export const logout = () => ({
  type: types.LOGOUT,
})
