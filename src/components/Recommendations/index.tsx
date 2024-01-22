import Image from "next/image";

import { recommendationsPreviews } from "@/constants/Recommendations";
import ArrowChevronIcon from "@/images/icons/ArrowChevronIcon";
import circle from "@/images/recommendations/circle.svg";

import RecommendationPreview from "../RecommendationPreview";
import styles from "./style.module.scss";

export default function Recommendations() {
  return (
    <div className={styles["recommendations__container"]}>
      <h2 className={styles["recommendations__title"]}>
        Отзывы и рекомендации
      </h2>
      <div className={styles["recommendations__arrows"]}>
        <button className={styles["arrow-btn"]} type="button">
          <ArrowChevronIcon direction="left" />
        </button>
        <button className={styles["arrow-btn"]} type="button">
          <ArrowChevronIcon direction="right" />
        </button>
      </div>
      <div className={styles["recommendations__preview-box"]}>
        {recommendationsPreviews.map((item) => {
          return <RecommendationPreview key={item.id} {...item} />;
        })}
      </div>
      <div className={styles["card__details"]}>
        <Image src={circle} alt="circle" width={100} height={50} />
        <h3 className={styles["card__details-title"]}>Рент-зона</h3>
        <h4 className={styles["card__details-information"]}>
          Аренда строительной техники
        </h4>
      </div>
    </div>
  );
}
