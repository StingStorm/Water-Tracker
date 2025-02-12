import clsx from "clsx";
import css from "./MonthStatsListItem.module.css";
import { useWaterSelector } from "../../hooks/useWaterSelector";

const MonthStatsListItem = ({
  day,
  getDayWithStats,
  getCurrentMonth,
  modalData,
  setModalData,
  setIsShowModal,
}) => {
  const { isLoading } = useWaterSelector();

  const stats = getDayWithStats(day);
  const isCurrentDay =
    new Date().toISOString().split("T")[0] ===
    getCurrentMonth() + "-" + day.toString().padStart(2, 0);

  const onShowModal = (e) => {
    const el = e.target;
    const cords = el.getBoundingClientRect();
    const elHeight = el.closest("li").offsetHeight;
    const elWidth = el.closest("li").offsetWidth;
    const currentDay = Number(el.childNodes[0].data);

    setIsShowModal(true);

    setModalData({
      ...modalData,
      cords: cords,
      currentElHeight: elHeight,
      currentElWidth: elWidth,
      currentDay: currentDay,
      stats: stats[0] || {
        pastDate: getCurrentMonth() + "-" + currentDay.toString(),
      },
    });
  };

  return (
    <>
      <div className={css.wrapper}>
        <div
          className={clsx(
            css.box,
            !isLoading &&
              parseInt(stats[0]?.percentage) < 100 &&
              stats?.length > 0 &&
              css.alterBoxBorder,
            !isLoading &&
              parseInt(stats[0]?.percentage) >= 100 &&
              css.completeBoxBorder,
            isCurrentDay && css.currentDay
          )}
          onClick={onShowModal}
        >
          {day}
        </div>
        <span className={css.text}>
          {stats?.length > 0 ? stats[0].percentage : "0%"}
        </span>
      </div>
    </>
  );
};

export default MonthStatsListItem;
