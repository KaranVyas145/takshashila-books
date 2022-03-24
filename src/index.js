import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import authReducer from "./Store/reducers/auth";

// ReactDOM.render(
// <React.StrictMode>
//     <App />
//   // </React.StrictMode>,
//   // document.getElementById('root')
// );

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(app, document.getElementById("root"));
reportWebVitals();

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDXscsaXpFAbfQzPCpgVvrPnb2RZxA-WGU",
//   authDomain: "takshashila-fc0ba.firebaseapp.com",
//   projectId: "takshashila-fc0ba",
//   storageBucket: "takshashila-fc0ba.appspot.com",
//   messagingSenderId: "952471697483",
//   appId: "1:952471697483:web:597f4cb67efa756737b5ce",
//   measurementId: "G-JTEMQFE6PE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
