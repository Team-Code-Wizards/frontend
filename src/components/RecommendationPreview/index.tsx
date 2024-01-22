import Image from "next/image";

import IRecommendationPreview from "@/interfaces/RecommendationPreview";

import styles from "./style.module.scss";

export default function RecommendationPreview({
  image,
  width,
  height,
}: IRecommendationPreview) {
  return (
    <div className={styles["card__container"]}>
      <div className={styles["card__image"]}>
        <Image src={image} alt="video-preview" width={width} height={height} />
      </div>
    </div>
  );
}
