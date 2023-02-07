import { useCallback } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/UI/Card/Card";

import useFetch from "../../hooks/useFetch";

import Form from "./Form";

import classes from "./SignUp.module.css";
const SignUp = () => {
  // Using a custom hook
  const { isLoading, error, fetchRequest: createAccount } = useFetch();
  // A function that will get response from the request made
  const getResponseData = useCallback((responseObj) => {
    if (responseObj?.success) {
    }
  }, []);

  const signUpHandler = async (formData) => {
    createAccount(
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
      <Card className={classes.login}>
        <h1 className={classes.h1}>Hello!</h1>
        <Form onSubmit={signUpHandler} isLoading={isLoading} error={error} />
        <p className={classes.p}>
          Already have an account?
          <Link to="/login" className={classes.a}>
            Login
          </Link>
        </p>
      </Card>
    </>
  );
};

export default SignUp;
