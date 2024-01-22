import IRecomendationPreview from "@/interfaces/RecommendationPreview";

import circle from "../../images/recommendations/circle.svg";
import centerSlide from "../../images/recommendations/center-slide.png";
import leftSlide from "../../images/recommendations/left-slide.png";
import rightSlide from "../../images/recommendations/right-slide.png";

export const recommendationsPreviews: IRecomendationPreview[] = [
  {
    id: 0,
    title: "",
    info: "",
    image: leftSlide,
    tag: "",
    width: 525,
    height: 314,
  },
  {
    id: 1,
    title: "Рент-зона",
    info: "Аренда строительной техники",
    image: centerSlide,
    tag: circle,
    width: 712,
    height: 423,
  },
  {
    id: 2,
    title: "",
    info: "",
    image: rightSlide,
    tag: "",
    width: 621,
    height: 314,
  },
];
