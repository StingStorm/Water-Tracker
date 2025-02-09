import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import DailyNorma from "../../components/DailyNorma/DailyNorma";
import StatsWrapper from "../../components/StatsWrapper/StatsWrapper";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import MyDailyNormaModal from "../../components/MyDailyNormaModal/MyDailyNormaModal";

import { useWaterSelector } from "../../hooks/useWaterSelector";
import { waterOperations } from "../../redux";

import css from "./HomePage.module.css";
import WaterForm from "../../components/WaterForm/WaterForm.jsx";

const HomePage = () => {
  const [isNormaModalOpen, setIsNormaModalOpen] = useState(false);

  const dispatch = useDispatch();

  const { dailyRecords } = useWaterSelector();

  useEffect(() => {
    dispatch(waterOperations.fetchTodayWaterRecords());
  }, [dispatch]);

  const openModal = () => setIsNormaModalOpen(true);
  const closeModal = () => setIsNormaModalOpen(false);


  const [showWaterForm,setShowWaterForm] = useState(false);
  const [waterEntry,setWaterEntry] = useState(null);
  const closeWaterModal = () => setShowWaterForm(false)
  const openWaterModal = () => setShowWaterForm(true)

  return (
    <div className={css.pageWrapper}>
      <MyDailyNormaModal isOpen={isNormaModalOpen} closeModal={closeModal} />
      <div>
        <DailyNorma openModal={openModal} />
        <WaterRatioPanel
          openWaterModal={openWaterModal}
        />
      </div>
      <StatsWrapper
        dailyRecords={dailyRecords}
        setWaterEntry={setWaterEntry}
        openWaterModal={openWaterModal}
      />
      <WaterForm
        showWaterForm={showWaterForm}
        handleVisibleForm={closeWaterModal}
        waterEntry={waterEntry}
        setWaterEntry={setWaterEntry}
      />
    </div>
  );
};

export default HomePage;
