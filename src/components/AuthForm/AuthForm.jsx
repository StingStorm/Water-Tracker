import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./AuthForm.module.css";
// import { useDispatch } from "react-redux";
import { useState } from "react";
import Icon from "../ui/Icon";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterUserSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const AuthForm = () => {
  //   const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={RegisterUserSchema}>
      <Form className={css.form}>
        <h2 className={css.title}>Sign Up</h2>
        <label className={css.label}>
          <span>Enter your email</span>
          <Field
            type="text"
            name="email"
            className={css.input}
            placeholder="E-mail"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="email"
            component="span"
          />
        </label>

        <label className={css.label}>
          <span>Enter your password</span>
          <div className={css.passwordField}>
            <Field
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              className={css.input}
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={css.eyeButton}
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            >
              {isPasswordVisible ? (
                <Icon name={"icon-eye"} width={16} height={16} />
              ) : (
                <Icon name={"icon-eye-slash"} width={16} height={16} />
              )}
            </button>
          </div>
          <ErrorMessage
            className={css.errorMessage}
            name="password"
            component="span"
          />
        </label>

        <label className={css.label}>
          <span>Repeat password</span>
          <div className={css.passwordField}>
            <Field
              type={isPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              className={css.input}
              placeholder="Repeat password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={css.eyeButton}
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            >
              {isPasswordVisible ? (
                <Icon name={"icon-eye"} width={16} height={16} />
              ) : (
                <Icon name={"icon-eye-slash"} width={16} height={16} />
              )}
            </button>
          </div>
          <ErrorMessage
            className={css.errorMessage}
            name="confirmPassword"
            component="span"
          />
        </label>
        <button type="submit" className={css.btn}>
          Sign Up
        </button>
        <div>
          <a href="/signin" className={css.link}>
            Sign in
          </a>
        </div>
      </Form>
    </Formik>
  );
};

export default AuthForm;
