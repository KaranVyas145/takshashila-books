import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");

  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeOut = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      // dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authSignup = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSourceToken: true,
    };
    console.log(authData);
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXscsaXpFAbfQzPCpgVvrPnb2RZxA-WGU";
    axios
      .post(url, authData)
      .then((response) => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        console.log(response);
        localStorage.setItem("token", response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeOut(response.data.expiresIn));
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const authSignin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSourceToken: true,
    };
    console.log(authData);
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXscsaXpFAbfQzPCpgVvrPnb2RZxA-WGU";
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000
        );
        localStorage.setItem("token", response.data.idToken);
        console.log(response.data.idToken);
        localStorage.setItem("userId", response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        dispatch(authFail(err.response.data.error));
      });
  };
};

// export const setAuthRedirectPath = (path) => {
//   return {
//     type: actionTypes.SET_AUTH_REDIRECT_PATH,
//     path: path,
//   };
// };

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    // console.log(token);
    if (!token) {
      // dispatch(logout());
      console.log("not token");
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      // if (expirationDate <= new Date()) {
      //   // dispatch(logout());
      //   console.log("expired");
      // }
      // else {
        const userId = localStorage.getItem("userId");
        // console.log(token);
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeOut(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      // }
    }
  };
};
