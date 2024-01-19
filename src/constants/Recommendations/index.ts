import IReccomendationPreview from "@/components/Recommendations/RecommendationPreview/interface";
import firstSlide from "../../images/recommendations/slide-left.jpg";
import secondSlide from "../../images/recommendations/slide-center.jpg";
import thirdSlide from "../../images/recommendations/видео 1.jpg";

export const recommendationsPreviews: IReccomendationPreview[] = [
  { id: 0, title: "", info: "", image: firstSlide },
  {
    id: 1,
    title: "Рент-зона",
    info: "Аренда строительной техники",
    image: secondSlide,
  },
  { id: 2, title: "", info: "", image: thirdSlide },
];
