import { useState } from "react";
import DaysGeneralStats from "../DaysGeneralStats/DaysGeneralStats";
import MonthStatsListItem from "../MonthStatsListItem/MonthStatsListItem";
import css from "./MonthStatsList.module.css";

const MonthStatsList = ({ days, month, monthStats, getCurrentMonth }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    cords: null,
    currentElHeight: null,
    currentElWidth: null,
    currentDay: null,
    stats: null,
  });

  const getDayWithStats = (day) => {
    return monthStats?.filter((dayStats) => {
      if (Number(dayStats.date.split(",")[0]) === day) return dayStats;
    });
  };

  return (
    <>
      <ul className={css.list}>
        {days.map((day) => (
          <li key={day} className={css.listItem}>
            <MonthStatsListItem
              day={day}
              monthStats={monthStats}
              getDayWithStats={getDayWithStats}
              setIsShowModal={setIsShowModal}
              getCurrentMonth={getCurrentMonth}
              modalData={modalData}
              setModalData={setModalData}
            />
          </li>
        ))}
      </ul>
      {isShowModal && (
        <DaysGeneralStats
          isOpen={isShowModal}
          modalData={modalData}
          setIsShowModal={setIsShowModal}
          month={month}
        />
      )}
    </>
  );
};

export default MonthStatsList;
