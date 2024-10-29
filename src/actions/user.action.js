import axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8000/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};