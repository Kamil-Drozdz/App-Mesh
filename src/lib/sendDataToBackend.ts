import axios, { AxiosError } from 'axios';

export async function sendDataToBackend(data, currentUserUid, endpoint) {
  const url = `${import.meta.env.VITE_APP_BACKEND_API}${endpoint}`;

  try {
    const payload = currentUserUid ? { ...data, uid: currentUserUid } : data;

    const response = await axios.post(url, payload);

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      console.error(`HTTP error! status: ${axiosError.response.status}`);
      throw axiosError.response.data;
    } else if (axiosError.request) {
      console.error('No response received');
      throw new Error('No response received');
    } else {
      console.error('Error', axiosError.message);
      throw new Error(axiosError.message);
    }
  }
}
