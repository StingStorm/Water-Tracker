import css from "./DailyNorma.module.css";

const DailyNorma = () => {
  return (
    <div className={css.dailyNormaContainer}>
      <h3 className={css.title}>My daily norma</h3>
      <div className={css.dailyNormaValue}>
        <p className={css.text}>1.5L</p>
        <button
          className={css.btn}
          type="button"
          onClick={() => console.log("Edit")}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default DailyNorma;
