import { loginFailure, loginStart, loginSuccess } from "../userSlice";
import { publicRequest, userRequest } from "./apiHandle";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const signup = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/signup", JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
