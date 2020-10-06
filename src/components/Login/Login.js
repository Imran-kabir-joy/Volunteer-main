import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import logo from "../../images/logos/Group 1329.png";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value;
  const [voluntary, setVoluntary] = value2;
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    email: "",
    success: false,
    error: "",
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleLogin = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        const { displayName, email } = result.user;
        const signedInUser = {
          name: displayName,
          email: email,
          loggedIn: true,
        };
        const volunteerInfo = {...voluntary};
        volunteerInfo.name = displayName;
        volunteerInfo.email = email;
        setVoluntary(volunteerInfo);
        setLoggedInUser(signedInUser);

        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        const newUserInfo = { ...userInfo };
        newUserInfo.error = errorMessage;
        setUserInfo(newUserInfo);
      });
  };
  console.log(loggedInUser);
  return (
    <Container className="login-container">
      <div className="w-100 text-center">
        <img src={logo} alt="" className="" width="320px" />
      </div>
      <div className="login-box ">
        <Button
          variant="outline-dark"
          className="form-control mt-5"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </Button>
      </div>
    </Container>
  );
};

export default Login;
