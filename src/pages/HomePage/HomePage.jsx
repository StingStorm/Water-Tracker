import DailyNorma from "../../components/DailyNorma/DailyNorma";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";

import css from "./HomePage.module.css";

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
