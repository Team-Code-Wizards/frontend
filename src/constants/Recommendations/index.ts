import IRecomendationPreview from "@/components/Recommendations/RecommendationPreview/interface";
import styles from "@/components/Recommendations/RecommendationPreview/style.module.scss";

import centerSlide from "../../images/recommendations/center-slide.png";
import leftSlide from "../../images/recommendations/left-slide.png";
import rightSlide from "../../images/recommendations/right-slide.png";

export const recommendationsPreviews: IRecomendationPreview[] = [
  {
    id: 0,
    title: "Василёк",
    width: "264px",
    height: "314px",
    info: "Ивановский трикотаж",
    image: leftSlide,
    className: styles["card__image_left"],
    isActive: false,
  },
  {
    id: 1,
    title: "Рент-зона",
    width: "712px",
    height: "423px",
    info: "Аренда строительной техники",
    image: centerSlide,
    className: styles["card__image_center"],
    isActive: true,
  },
  {
    id: 2,
    title: "Чистый город",
    width: "264px",
    height: "314px",
    info: "Вывоз мусора",
    image: rightSlide,
    className: styles["card__image_right"],
    isActive: false,
  },
];
