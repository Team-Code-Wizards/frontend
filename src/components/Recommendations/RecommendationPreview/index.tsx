import Image from "next/image";
import IRecommendationPreview from "./interface";
import styles from "./style.module.scss";

export default function RecommendationPreview({
  title,
  image,
}: IRecommendationPreview) {
  return (
    <div className={styles["card__container"]}>
      <div className={styles["card__image"]}>
        <Image
          src={image}
          alt="video-preview"
          width={500}
          style={{ position: "absolute", left: "-47px", top: "-4px" }}
        />
      </div>
      <h3 className={styles["card__title"]}>{title}</h3>
    </div>
  );
}
