import axios from 'axios';

const url = 'http://localhost:5000/managers';


export const fetchManagers = () => axios.get(url)
export const createManager = (manager) => axios.post(url, manager)
export const updateManager = (id,manager) => axios.patch(`${url}/${id}`, manager)
export const deleteManager = (id) => axios.delete(`${url}/${id}`)





