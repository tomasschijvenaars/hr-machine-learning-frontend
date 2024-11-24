export const getKNN = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};