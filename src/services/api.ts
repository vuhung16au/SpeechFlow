import axios from 'axios';

const API_URL = 'https://your-api-endpoint.com'; // Replace with your actual API endpoint

export const sendMessage = async (message) => {
    try {
        const response = await axios.post(`${API_URL}/send`, { message });
        return response.data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};

export const getResponse = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/response`, { params: { userId } });
        return response.data;
    } catch (error) {
        console.error('Error fetching response:', error);
        throw error;
    }
};