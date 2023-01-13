import axios from "axios";
const baseUrl = "http://13.127.79.250";

export const signup = async (data) => {
  try {
    let obj;
    if (data.name.split(" ").length > 1) {
      obj = {
        type: "seller",
        first_name: data.name.split(" ")[0],
        last_name: data.name.split(" ")[1],
        password: data.password,
        confirm_password: data.confirm_password,
        username: data.username,
        email: data.email,
      };
    } else {
      obj = {
        hint: "seller",
        first_name: data.name.split(" ")[0],
        password: data.password,
        confirm_password: data.confirm_password,
        username: data.username,
        email: data.email,
      };
    }

    const res = await axios.post(`${baseUrl}/auth/registration/`, obj);
    return res;
  } catch (error) {
    return error;
  }
};

export const login = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}/auth/login/`, data);
    return res;
  } catch (error) {
    return error;
  }
};
