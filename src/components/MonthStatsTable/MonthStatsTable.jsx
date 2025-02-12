import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useWaterSelector } from "../../hooks/useWaterSelector";
import { useDebouncedCallback } from "use-debounce";
import MonthStatsList from "../MonthStatsList/MonthStatsList";
import MonthStatsBar from "../MonthStatsBar/MonthStatsBar";
import { waterOperations } from "../../redux";
import css from "./MonthStatsTable.module.css";

const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const MonthStatsTable = () => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const dispatch = useDispatch();

  const { sortedMonthStats } = useWaterSelector();

  const getCurrentMonth = useCallback(
    () => year.toString() + "-" + month?.toString().padStart(2, 0),
    [year, month]
  );

  const debouncedFetchHandler = useDebouncedCallback(() => {
    dispatch(waterOperations.fetchWaterMonthStats(getCurrentMonth()));
  }, 300);

  useEffect(() => {
    debouncedFetchHandler();
  }, [debouncedFetchHandler, month]);

  const numberOfDays = new Date(year, month, 0).getDate();
  const days = [...Array(numberOfDays).keys()].map((i) => i + 1);

  const nextMonth = () => {
    if (month === currentMonth && year === currentYear) return;

    if (month === 12) {
      setMonth(0);
      setYear((prevYear) => prevYear + 1);
    }

    setMonth((prev) => prev + 1);
  };

  const previousMonth = () => {
    if (month === 1) {
      setMonth((prevMonth) => prevMonth + 12);
      setYear((prevYear) => prevYear - 1);
    }
    setMonth((prev) => prev - 1);
  };

  return (
    <div className={css.container}>
      <MonthStatsBar
        currentMonth={currentMonth}
        currentYear={currentYear}
        month={month}
        year={year}
        prevMonth={previousMonth}
        nextMonth={nextMonth}
      />
      <MonthStatsList
        days={days}
        month={month}
        monthStats={sortedMonthStats}
        getCurrentMonth={getCurrentMonth}
      />
    </div>
  );
};

export default MonthStatsTable;
