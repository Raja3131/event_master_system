import { FETCH_ALL, CREATE,DELETE,UPDATE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getManagers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchManagers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createManager = (manager) => async (dispatch) => {
  try {
    const { data } = await api.createManager(manager);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateManager = (id,manager) => async (dispatch) => {
  try {
    const { data } = await api.updateManager(id,manager);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}
export const deleteManager = (id) => async (dispatch) => {
  try {
    await api.deleteManager(id);

    dispatch({ type: DELETE, payload: id });
    
  } catch (error) {
    console.log(error.message);
  }
}

