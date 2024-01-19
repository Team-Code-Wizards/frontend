import styles from "./style.module.scss";
import firstSlide from "../../images/recommendations/slide-left.jpg";
import secondSlide from "../../images/recommendations/slide-center.jpg";
import thirdSlide from "../../images/recommendations/видео 1.jpg";
import RecommendationPreview from "../Recommendations";
import IReccomendationPreview from "./RecommendationPreview/interface";
import ArrowChevronIcon from "@/images/icons/ArrowChevronIcon";

export default function Recommendations() {
  const recommendationsPreviews: IReccomendationPreview[] = [
    { title: "", info: "", image: firstSlide },
    {
      title: "Рент-зона",
      info: "Аренда строительной техники",
      image: secondSlide,
    },
    { title: "", info: "", image: thirdSlide },
  ];
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
      <div className={styles["recommendations__card-box"]}>
        {recommendationsPreviews.map((previews) => (
          <RecommendationPreview key={crypto.randomUUID()} {...previews} />
        ))}
      </div>
    </section>
  );
}
