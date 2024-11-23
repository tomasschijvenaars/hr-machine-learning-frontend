import axios from 'axios';

export const getJobScore = async (id, userId) => {
  try {
    const response = await axios.get(`http://localhost:8000/jobs/${id}/${userId}`);
    return response.data.result;
  } catch (error) {
    console.error('Error fetching job score:', error);
    throw error;
  }
};