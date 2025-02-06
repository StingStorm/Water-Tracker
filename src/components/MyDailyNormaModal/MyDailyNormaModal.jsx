import { Formik, Form } from "formik";
import * as yup from "yup";

import TextField from "../ui/TextFiled/TextField";
import RadioGroup from "../ui/RadioGroup/RadioGroup";
import Button from "../ui/Button/Button";

import styles from "./my-daily-norma-modal.module.css";
import ModalContainer from "../ui/ModalContainer/ModalContainer";
import { useState } from "react";
const calcDailyNorma = ({ gender, weight, time }) => {
  if (!weight || !time) return 0;
  const weightCoef = gender === "woman" ? 0.03 : 0.04;
  const timeCoef = gender === "woman" ? 0.04 : 0.06;
  return (weight * weightCoef + time * timeCoef).toFixed(2);
};
const addWaterSchema = yup.object().shape({
  weight: yup
    .number()
    .required()
    .min(20, "Min weight can't be less then 20 kg")
    .max(300, "Max weight can't be more then 300 kg"),
  time: yup
    .string()
    .required()
    .matches(/[0-9]{1,2}/g, "Time must match the following pattern hh"),
  gender: yup
    .string()
    .required()
    .oneOf(["man", "woman"], "Gender can be either man or women"),
  water: yup
    .number()
    .required()
    .min(0, "Min drunken water can't be less then 0 liters")
    .max(15, "Max drunken water  can't be more then 15 liters"),
});
const MyDailyNormaModal = ({ isOpen, closeModal }) => {
  const [userIsTyping, setUserIsTyping] = useState(false);

  return (
    <ModalContainer isOpen={isOpen} closeModal={closeModal}>
      <div>
        <h3 className={styles.title}>My daily norma</h3>
        <div className={styles.formulaWrapper}>
          <p>
            For girl:
            <span className={styles.formula}>V=(M*0,03) + (T*0,4)</span>
          </p>
          <p>
            For man:
            <span className={styles.formula}>V=(M*0,04) + (T*0,6)</span>
          </p>
        </div>
        <p className={styles.formulaComment}>
          <span className={styles.formulaCommentStar}>*</span> V is the volume
          of the water norm in liters per day, M is your body weight, T is the
          time of active sports, or another type of activity commensurate in
          terms of loads (in the absence of these, you must set 0)
        </p>

        <Formik
          initialValues={{
            gender: "woman",
            weight: "0",
            time: "0",
            water: "0",
          }}
          validationSchema={addWaterSchema}
          onSubmit={(values) => {}}
        >
          {({ values, errors, setFieldValue, setFieldError }) => (
            <Form>
              <RadioGroup
                {...fields.gender}
                onChange={(evt) => {
                  setFieldValue("gender", evt.target.value);
                  setFieldError("water", null);
                  setUserIsTyping(false);
                }}
                error={errors.gender}
              />
              <TextField
                {...fields.weight}
                onChange={(evt) => {
                  setFieldValue("weight", evt.target.value);
                  setFieldError("water", null);
                  setUserIsTyping(false);
                }}
                error={errors.weight}
              />
              <TextField
                {...fields.time}
                onChange={(evt) => {
                  setFieldValue("time", evt.target.value);
                  setFieldError("water", null);
                  setUserIsTyping(false);
                }}
                error={errors.time}
              />
              <p className={styles.waterDay}>
                The required amount of water in liters per day:{" "}
                <span className={styles.waterDayValue}>
                  {userIsTyping ? values.water : calcDailyNorma(values)} L
                </span>
              </p>
              <TextField
                {...fields.water}
                error={errors.water}
                onChange={(evt) => {
                  setFieldValue("water", evt.target.value);
                  setUserIsTyping(true);
                }}
                value={userIsTyping ? values.water : calcDailyNorma(values)}
              />
              <div className={styles.buttonWrapper}>
                <Button width="160px">Save</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </ModalContainer>
  );
};

export default MyDailyNormaModal;
const fields = {
  weight: {
    label: "Your weight in kilograms:",
    name: "weight",
    type: "text",
    placeholder: "weight in kilograms",
  },
  time: {
    label:
      "The time of active participation in sports or other activities with a high physical. load in hours:",
    name: "time",
    type: "text",
    placeholder: "time of active",
  },
  water: {
    label: "Write down how much water you will drink:",
    name: "water",
    type: "text",
    placeholder: "water you will drink",
    bold: true,
  },
  gender: {
    title: "Calculate your rate:",
    name: "gender",
    items: [
      {
        value: "woman",
        label: "For woman",
      },
      {
        value: "man",
        label: "For man",
      },
    ],
  },
};
