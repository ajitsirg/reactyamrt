import axios from "axios";
const apiUrl = "http://13.127.79.250";

export const productPost = async (data, token) => {
  try {
    const res = await axios.post(`${apiUrl}/ecom/product/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return res;
  } catch (error) {
    return error;
  }
};

export const productGet = async (token) => {
  try {
    const res = await axios.get(`${apiUrl}/ecom/product/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const productDelete = async (id, token) => {
  const res = await axios.delete(`${apiUrl}/ecom/product/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
