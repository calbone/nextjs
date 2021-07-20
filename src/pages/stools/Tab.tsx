import styles from "./Stools.module.css";
import { StoolsContainer } from "./useStools";

const Tab = () => {
  const { current, handleChange } = StoolsContainer.useContainer();
  return (
    <div>
      <span
        className={current === "home" ? styles.current : ""}
        onClick={() => handleChange("home")}
      >
        自宅
      </span>
      <span
        className={current === "shop" ? styles.current : ""}
        onClick={() => handleChange("shop")}
      >
        店舗
      </span>
      <span
        className={current === "locker" ? styles.current : ""}
        onClick={() => handleChange("locker")}
      >
        ロッカー
      </span>
    </div>
  );
};

export default Tab;
