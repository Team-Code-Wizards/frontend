import Image from "next/image";

import circle from "@/images/recommendations/circle.svg";
import "swiper/scss";

import IRecommendationPreview from "./interface";
import styles from "./style.module.scss";

//import { recommendationsPreviews } from "@/constants/Recommendations";

export default function RecommendationPreview({
  image,
  width,
  height,
  isActive,
  className,
}: IRecommendationPreview) {
  return (
    <div className={styles["slide__container"]}>
      <div className={styles["slide__image"]}>
        <Image
          src={image}
          width={width}
          height={height}
          alt="video-preview"
          className={className + isActive ? "active" : ""}
        />
      </div>
      {isActive ? (
        <div className={styles["slide__details"]}>
          <Image
            src={circle}
            alt="circle"
            width={100}
            height={50}
            className={styles["slide__details-circle"]}
          />
          <h3 className={styles["slide__details-title"]}>Рент-зона</h3>
          <h4 className={styles["slide__details-information"]}>
            Аренда строительной техники
          </h4>
        </div>
      ) : null}
    </div>
  );
}
