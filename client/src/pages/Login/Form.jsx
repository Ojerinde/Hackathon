import { useState } from "react";
import { ValidatePassword, ValidateEmail } from "../SignUp/lib";

import Input from "./Input";
import LoadingSpinner from "../../components/UI/LoadingSpinner/LoadingSpinner";
import Button from "../../components/UI/Button/Button";

import classes from "./Form.module.css";
const Form = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordIcon] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
    emailIsValid: false,
    passwordIsValid: false,
    emailIsFocus: false,
    passwordIsFocus: false,
  });

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const passwordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct.

  const emailOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, emailIsFocus: true };
    });

    const isValid = ValidateEmail(form.email);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, emailIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, emailIsValid: false };
      });
    }
  };

  const passwordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, passwordIsFocus: true };
    });

    const isValid = ValidatePassword(form.password);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, passwordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, passwordIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to parent component
    props.onSubmit({
      email: form.email,
      password: form.password,
    });
  };

  return (
    <form className={classes.login__form} onSubmit={submitHandler}>
      <Input
        id="email"
        label="Email"
        type="text"
        invalid={!form.emailIsValid && form.emailIsFocus ? "invalid" : ""}
        placeholder="example@name.com"
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <pre className={classes.invalid__input}>Please enter a valid email</pre>
      )}
      <Input
        id="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        invalid={!form.passwordIsValid && form.passwordIsFocus ? "invalid" : ""}
        placeholder="e.g, Password@1234"
        value={form.password}
        onChange={passwordOnChangeHandler}
        onBlur={passwordOnBlurHandler}
        passwordIcon={passwordIcon}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {form.passwordIsFocus && !form.passwordIsValid && (
        <pre className={classes.invalid__input}>
          MinLength(8), uppercase, lowercase, character, number
        </pre>
      )}

      <div style={{ margin: "3rem 0 0" }}>
        {props.isLoading && <LoadingSpinner />}
        {!props.isLoading && props.error.hasError && (
          <p className={classes.error__message}>
            {`Sign in failed! - ${props.error.message}`}
          </p>
        )}
      </div>

      <div className={classes.btn__box}>
        <Button id="btn__submit" type="submit" className={classes.button}>
          Sign In
        </Button>
      </div>
    </form>
  );
};
export default Form;
