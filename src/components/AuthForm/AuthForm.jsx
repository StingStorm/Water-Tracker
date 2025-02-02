import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signUp } from "../../redux/auth/operations.js";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Icon from "../ui/Icon";
import css from "./AuthForm.module.css";

const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleSubmit = (values, actions) => {
    console.log("values: ", values);
    dispatch(signUp(values))
      .unwrap()
      .then(() => {
        // Success toast
        toast.success("Registration successful!");
        navigate("/home");
      })
      .catch(() => {
        // Error toast
        toast.error("Registration error!");
      });
    actions.resetForm();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterUserSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <h2 className={css.title}>Sign Up</h2>

          {/* Поле Email */}
          <label className={css.label}>
            <span>Enter your email</span>
            <Field
              type="text"
              name="email"
              className={`${css.input} ${
                errors.email && touched.email ? css.inputError : ""
              }`}
              placeholder="E-mail"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>

          {/* Поле Password */}
          <label className={css.label}>
            <span>Enter your password</span>
            <div className={css.passwordField}>
              <Field
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                className={`${css.input} ${
                  errors.password && touched.password ? css.inputError : ""
                }`}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={css.eyeButton}
                aria-label={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
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

          {/* Поле Confirm Password */}
          <label className={css.label}>
            <span>Repeat password</span>
            <div className={css.passwordField}>
              <Field
                type={isConfirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                className={`${css.input} ${
                  errors.confirmPassword && touched.confirmPassword
                    ? css.inputError
                    : ""
                }`}
                placeholder="Repeat password"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className={css.eyeButton}
                aria-label={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
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
            <Link to="/signin" className={css.link}>
              Sign in
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
