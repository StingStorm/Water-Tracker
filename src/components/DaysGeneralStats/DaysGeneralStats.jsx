import { useCallback, useEffect, useRef } from "react";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { useClickOutside } from "../../hooks/useClickOutside";
import { months } from "../../constants";
import css from "./DaysGeneralStats.module.css";

const DaysGeneralStats = ({ isOpen, modalData, setIsShowModal, month }) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const targetRef = useRef(null);

  const { cords, currentElHeight, currentElWidth, currentDay, stats } =
    modalData;

  const styles = {
    height: "188px",
  };

  const popupRange = 14;

  if (cords && currentElHeight) {
    if (isMobile) {
      styles.width = "280px";
      styles.left = "50%";
      styles.transform = "translateX(-50%)";

      cords.top > parseInt(styles.height)
        ? (styles.top =
            cords.top - parseInt(styles.height) - `${popupRange}` - 2 + "px")
        : (styles.top = cords.top + currentElHeight + `${popupRange}` + "px");
    }
    if (isTablet) {
      styles.width = "292px";
      styles.transform = "translateX(0)";
      styles.top = cords.top - parseInt(styles.height) + "px";

      (currentDay <= 4) |
      (currentDay >= 11 && currentDay <= 14) |
      (currentDay >= 21 && currentDay <= 24) |
      (currentDay === 31)
        ? (styles.left = cords.left + currentElWidth / 2 + "px")
        : (styles.left =
            cords.right - parseInt(styles.width) - currentElWidth / 2 + "px");
    }
    if (isDesktop) {
      styles.width = "292px";
      styles.transform = "translateX(0)";
      styles.top = cords.top - parseInt(styles.height) + "px";
      styles.left =
        cords.left - parseInt(styles.width) + currentElWidth / 2 + "px";
    }
  }

  const onCloseModal = useCallback(() => {
    if (isOpen) {
      setIsShowModal(false);
    }
  }, [setIsShowModal, isOpen]);

  useClickOutside(targetRef, () => {
    if (isOpen) setIsShowModal(false);
  });

  useEffect(() => {
    const onCloseByScroll = () => {
      window.addEventListener("scroll", onCloseModal);
    };

    onCloseByScroll();

    return () => {
      window.removeEventListener("scroll", onCloseModal);
    };
  }, [onCloseModal]);

  return (
    <div className={css.modal} ref={targetRef} style={{ ...styles }}>
      <p style={{ color: "var(--primary-color-blue)" }}>
        {stats?.date ?? `${currentDay}, ${months[month]}`}
      </p>
      <p className={css.modalText}>
        Daily norma:{" "}
        <span className={css.modalSpan}>{stats?.dailyNorma ?? "2 L"}</span>
      </p>
      <p className={css.modalText}>
        Fulfillment of the daily norm:{" "}
        <span className={css.modalSpan}>{stats?.percentage ?? "0%"}</span>
      </p>
      <p className={css.modalText}>
        How many servings of water:{" "}
        <span className={css.modalSpan}>{stats?.entryCount ?? "0"}</span>
      </p>
    </div>
  );
};

export default DaysGeneralStats;
