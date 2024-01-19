import styles from "./style.module.scss";
import { recommendationsPreviews } from "@/constants/Recommendations";
import RecommendationPreview from "../Recommendations";
import ArrowChevronIcon from "@/images/icons/ArrowChevronIcon";

export default function Recommendations() {
  return (
    <section className={styles["recommendations__container"]}>
      <span className={styles["recommendations__title"]}>
        Отзывы и рекомендации
      </span>
      <div className={styles["recommendations__arrows"]}>
        <button className={styles["arrows-btn"]} type="button">
          <ArrowChevronIcon direction="left" />
        </button>
        <button className={styles["flipping-btn"]} type="button">
          <ArrowChevronIcon direction="right" />
        </button>
      </div>
      <div className={styles["recommendations__preview-box"]}>
        {recommendationsPreviews.map((item) => {
          return <RecommendationPreview key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
