import TodayWaterListItem from "../TodayWaterListItem/TodayWaterListItem";
import css from "./TodayWaterList.module.css";

const TodayWaterList = ({ dailyRecords }) => {
  const { entries } = dailyRecords;

  return (
    <div className={css.container}>
      <h3 className={css.subtitle}>Today</h3>
      {entries?.length > 0 ? (
        <ul className={css.list}>
          {entries?.map((entry) => (
            <li key={entry._id}>
              <TodayWaterListItem entry={entry} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.emptyListMsg}>
          There is no information yet about the portions of water drunk for this
          day.
        </p>
      )}
      <button type="button" className={css.button}>
        <svg className={css.svg}>
          <use href="/sprite.svg#icon-plus-small-v2"></use>
        </svg>
        Add water
      </button>
    </div>
  );
};

export default TodayWaterList;
