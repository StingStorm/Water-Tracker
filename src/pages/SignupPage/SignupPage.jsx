import AuthForm from "../../components/AuthForm/AuthForm";
import css from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <section className={css.background}>
      <AuthForm />
      <div className={css.bottle}></div>
    </section>
  );
};

export default SignupPage;
