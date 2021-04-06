import axios from "axios";
// import { dispatch } from "redux-thunk";

export const getUsers = () => {
  return async (dispatch) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: "GET_USERS",
      payload: res.data,
    });
  };
};
