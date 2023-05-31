import { loginRef, passRef, repeatPassRef } from "../../components/Input/Input";

export const enter = async (userLogin) => {
  if (loginRef.current.value === "" || passRef.current.value === "") {
    console.log("error");
    return;
  } else {
    try {
      const response = await userLogin({
        email: loginRef.current.value,
        password: passRef.current.value,
      });
      const responseData = response.data;
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }
};

export const registration = async (userSignup) => {
  if (
    loginRef.current.value === "" ||
    passRef.current.value === "" ||
    repeatPassRef.current.value === ""
  ) {
    console.log("error");
    return;
  } else if (passRef.current.value === repeatPassRef.current.value) {
    try {
      const response = await userSignup({
        email: loginRef.current.value,
        password: passRef.current.value,
        username: loginRef.current.value,
      });
      const responseData = response.data;
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  } else if (passRef.current.value !== repeatPassRef.current.value) {
    console.log("passwords are not equal");
  }
};
