import styles from "./radio-group.module.css";
import { Field } from "formik";

const RadioGroup = ({ title, name, items, onChange }) => {
  const elements = items.map((item) => (
    <div className={styles.wrapper} key={item.value}>
      <Field name={name} value={item.value} type="radio" onChange={onChange} />
      <span>{item.label}</span>
    </div>
  ));
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.radioWrapper}>{elements}</div>
    </div>
  );
};
export default RadioGroup;
