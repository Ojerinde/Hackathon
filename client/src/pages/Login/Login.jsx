import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/UI/Card/Card";

import useFetch from "../../hooks/useFetch";

import Form from "./Form";

import classes from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  // Using a custom hook
  const { isLoading, error, fetchRequest: LoginRequest } = useFetch();

  // A function that will get response from the request made
  const getResponseData = useCallback(
    (responseObj) => {
      if (responseObj?.message === "Logged in Successfully") {
        navigate("/server");
      } else {
        console.log(responseObj, "error");
      }
    },
    [navigate]
  );

  const signInHandler = async (formData) => {
    LoginRequest(
      {
        url: "#",
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
