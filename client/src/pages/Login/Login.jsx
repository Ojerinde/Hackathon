import { useCallback, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/UI/Card/Card";

import useFetch from "../../hooks/useFetch";
import { DataContext } from "../../store/DataContext";

import Form from "./Form";

import classes from "./Login.module.css";

let email;

const Login = () => {
  const navigate = useNavigate();
  const { socket } = useContext(DataContext);
  // Using a custom hook
  const { isLoading, error, fetchRequest: LoginRequest } = useFetch();

  // A function that will get response from the request made
  const getResponseData = useCallback(
    (responseObj) => {
      console.log(responseObj);
      if (responseObj.status === "success") {
        navigate("/chats");
        socket.auth = { email };
        socket.connect();
        localStorage.setItem(
          "login_token",
          JSON.stringify({ login_token: responseObj.token })
        );
      }
    },
    [navigate, socket]
  );

  const signInHandler = async (formData) => {
    email = formData.email;
    LoginRequest(
      {
        url: "https://chatapp-cktm.onrender.com/api/v1/users/login",
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      },
      getResponseData
    );
  };

  return (
    <>
      <Card className={classes.login} data-testid="login__page">
        <h1 className={classes.h1}>Welcome back!</h1>
        <Form onSubmit={signInHandler} isLoading={isLoading} error={error} />
        <p className={classes.p}>
          Don't have an account?
          <Link to="/signup" className={classes.a}>
            Create now
          </Link>
        </p>
      </Card>
    </>
  );
};

export default Login;
