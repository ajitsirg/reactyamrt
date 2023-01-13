import axios from "axios";
const apiUrl = "http://13.127.79.250";

export const categoryPost = async (data, token) => {
  try {
    console.log(data);
    const res = await axios.post(`${apiUrl}/ecom/category/`, data, {
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

export const categoryGet = async () => {
  try {
    const res = await axios.get(`${apiUrl}/ecom/category/`);
    return res;
  } catch (error) {
    return error;
  }
};

export const categoryDelete = async (id, token) => {
  const res = await axios.delete(`${apiUrl}/ecom/category/${id}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
