import { useState } from "react";
import DailyNorma from "../../components/DailyNorma/DailyNorma";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";

import css from "./HomePage.module.css";
import MyDailyNormaModal from "../../components/MyDailyNormaModal/MyDailyNormaModal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <DailyNorma />
      <WaterRatioPanel openModal={openModal} />
      <MyDailyNormaModal isOpen={isModalOpen} closeModal={closeModal} />
      {/* <p>Today Water List</p>
      <p>Month Stats Table</p> */}
    </>
  );
};

export default HomePage;
