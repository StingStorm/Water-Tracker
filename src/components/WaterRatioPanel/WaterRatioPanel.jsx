// import { useAuthSelector } from "../../hooks/useAuthSelector";
// import { useWaterSelector } from "../../hooks/useWaterSelector";

import css from "./WaterRatioPanel.module.css";

const WaterRatioPanel = () => {
  //   const { waterServings } = useWaterSelector(); // [] item
  //   const { currentServing } = useWaterSelector(); // порція
  //   const { user } = useAuthSelector(); // user {... dailyNorm}

  //   const waterProgress = Math.round((currentServing / user.dailyNorm) * 100);
  const waterProgress = Math.round((880 / 1500) * 100);
  const displayedPercentage = waterProgress >= 100 ? 100 : waterProgress;

  return (
    <div className={`${css.waterRatioPanelСontainer}`}>
      <div className={css.wrapper}>
        <p className={css.title}>Today</p>
        <div className={css.progressBar}>
          <div className={css.ratioPanelWrapp}>
            <div
              className={css.ratioPanelFill}
              style={{
                width: `${displayedPercentage}%`,
                backgroundColor: "#9ebbff",
              }}
            >
              {displayedPercentage <= 100 && (
                <p
                  className={css.percentNumber}
                  style={{
                    left: `${displayedPercentage}%`,
                    transform: "translateX(-50%)",
                    color: "#407bff",
                  }}
                >
                  {`${displayedPercentage}%`}
                </p>
              )}
            </div>
            <div
              className={css.thumb}
              style={{
                left: `${displayedPercentage}%`,
              }}
            ></div>
          </div>
        </div>
        <div className={css.persentContainer}>
          <div className={css.markWrap}>
            <div className={css.mark} style={{ left: "0%" }}></div>{" "}
            {/* Смужка 0% */}
            <div className={css.mark} style={{ left: "50%" }}></div>{" "}
            {/* Смужка 50% */}
            <div className={css.mark} style={{ left: "100%" }}></div>{" "}
            {/* Смужка 100% */}
          </div>
          <div className={css.percentWrap}>
            <p className={css.percent}>0%</p>
            <p className={css.percent}>50%</p>
            <p className={css.percent}>100%</p>
          </div>
        </div>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => console.log("Add Water")}
      >
        Add Water
      </button>
    </div>
  );
};

export default WaterRatioPanel;
