import { userDataActionTypes } from './users.types';

export const addUserData =  (data) => {
	console.log(data)
	return {
		type: userDataActionTypes.ADD_USER_DATA,
		payload: data,
	};
};

export const delUserData = (id) => {
	console.log(id);
	return{
		type: userDataActionTypes.DEL_USER_DATA,
		payload: id,
	};
};