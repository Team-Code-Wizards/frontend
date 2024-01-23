"use client";
import { recommendationsPreviews } from "@/constants/Recommendations";
import ArrowChevronIcon from "@/images/icons/ArrowChevronIcon";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import IRecommendationPreview from "./RecommendationPreview/interface";
import { Swiper, SwiperSlide } from "swiper/react";
//import Image from "next/image";
import RecommendationPreview from "./RecommendationPreview";
import styles from "./style.module.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
      <div className={styles["recommendations__swiper"]}>
        <Swiper
          style={{ width: "1280px" }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          autoplay={false}
          slidesPerView={3}
          spaceBetween={10}
          pagination={{ clickable: true }}
        >
          {recommendationsPreviews.map((item) => (
            <SwiperSlide key={item.id}>
              <RecommendationPreview {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
