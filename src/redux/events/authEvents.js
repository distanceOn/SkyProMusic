import { loginRef, passRef, repeatPassRef } from "../../components/Input/Input";
import { setUser } from "../slices/authSlice";

const getToken = async (userToken, dispatch, logData, responseData) => {
  try {
    const tokenData = await userToken(logData);

    dispatch(setUser({ ...responseData, token: tokenData.data }));
    localStorage.setItem("refresh", tokenData.data.refresh);
    localStorage.setItem("access", tokenData.data.access);
  } catch (error) {
    console.log(error);
  }
};

export const enter = async (userLogin, dispatch, userToken) => {
  if (loginRef.current.value === "" || passRef.current.value === "") {
    console.log("error");
    return;
  } else {
    try {
      const logData = {
        email: loginRef.current.value,
        password: passRef.current.value,
      };

      const response = await userLogin(logData);
      const responseData = response.data;

      localStorage.setItem("user", JSON.stringify(responseData));
      localStorage.setItem("id", JSON.stringify(responseData.id));

      await getToken(userToken, dispatch, logData, responseData);
    } catch (error) {
      console.log(error);
    }
  }
};

export const registration = async (userSignup, dispatch, userToken) => {
  if (
    loginRef.current.value === "" ||
    passRef.current.value === "" ||
    repeatPassRef.current.value === ""
  ) {
    console.log("error");
    return;
  } else if (passRef.current.value === repeatPassRef.current.value) {
    try {
      const logData = {
        email: loginRef.current.value,
        password: passRef.current.value,
        username: loginRef.current.value,
      };
      const response = await userSignup(logData);
      const responseData = response.data;

      localStorage.setItem("user", JSON.stringify(responseData));

      await getToken(userToken, dispatch, logData, responseData);
    } catch (error) {
      console.log(error);
    }
  } else if (passRef.current.value !== repeatPassRef.current.value) {
    console.log("passwords are not equal");
  }
};
