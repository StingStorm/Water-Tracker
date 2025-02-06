import { useId } from "react";
import { Field } from "formik";
import clsx from "clsx";

import styles from "./text-field.module.css";

const TextField = ({ label, bold, error, ...props }) => {
  const id = useId();
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={clsx(styles.label, bold && styles.bold)}>
          {label}
        </label>
      )}
      <Field
        id={id}
        className={clsx(styles.field, error && styles.error)}
        {...props}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
};

export default TextField;
