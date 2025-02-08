import DailyNorma from "../../components/DailyNorma/DailyNorma";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";

import css from "./HomePage.module.css";
import WaterForm from "../../components/WaterForm/WaterForm.jsx";
import {useState} from "react";

const HomePage = () => {
  return (
    <>
      <DailyNorma />
      <WaterRatioPanel />

      {/* <p>Today Water List</p>
      <p>Month Stats Table</p> */}
    </>
  );
};

export default HomePage;
