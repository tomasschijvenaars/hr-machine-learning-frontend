import axios from 'axios';

export const getJobs = async () => {
  try {
    const response = await axios.get('http://localhost:8000/jobs');
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export const getJob = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};
