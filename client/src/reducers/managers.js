import { FETCH_ALL, CREATE, UPDATE, DELETE,  } from '../constants/actionTypes';

export default (managers = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    
    case CREATE:
      return [...managers, action.payload];
    case UPDATE:
      return managers.map((manager) => (manager._id === action.payload._id ? action.payload : manager));
    case DELETE:
      return managers.filter((manager) => manager._id !== action.payload);
    default:
      return managers;
  }
};