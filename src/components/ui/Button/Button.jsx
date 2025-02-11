import clsx from "clsx";
import Loader from "../Loader/Loader";
import css from "./Button.module.css";

const Button = ({
  variant = "default",
  width = "100%",
  className,
  type = "button",
  onClick,
  isLoading = false,
  children,
}) => {
  const buttonStyle = clsx(
    css.button,
    variant === "default" && css.buttonBlue,
    variant === "destructive" && css.buttonDestructive,
    variant === "cancel" && css.buttonCancel,
    className && className
  );

  return (
    <button
      type={type}
      className={buttonStyle}
      style={{ width }}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;

