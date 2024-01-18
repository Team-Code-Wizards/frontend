import styles from "./style.module.scss";
import Image from "next/image";
import firstSlide from "../../images/recommendations/slide-left.jpg";
import secondSlide from "../../images/recommendations/slide-center.jpg";
import thirdSlide from "../../images/recommendations/видео 1.jpg";
import circle from "../../images/recommendations/circle.svg";
import arrows from "../../images/recommendations/arrows.svg";

export default function Recommendations() {
  return (
    <section className={styles["recommendations"]}>
      <div className={styles["title"]}>
        Отзывы и рекомендации
        <div className={styles["arrows"]}>
          <Image src={arrows} width={40} height={40} alt={"arrows"} />
        </div>
      </div>
      <div className={styles["recommendations_body"]}>
        <div className={styles["carousel"]}>
          <Image
            src={firstSlide}
            width={200}
            height={200}
            alt={"preview-one"}
            className={styles["carousel-cell__left"]}
          />
          <Image
            src={secondSlide}
            width={712}
            height={423}
            alt={"preview-two"}
            className={styles["carousel-cell__center"]}
          />
          <Image
            src={thirdSlide}
            width={200}
            height={175}
            alt={"preview-three"}
            className={styles["carousel-cell__right"]}
          />
        </div>
        <div className={styles["information"]}>
          <Image
            src={circle}
            width={40}
            height={30}
            alt={"circle"}
            className={styles["information-picture"]}
          />
          <div className={styles["information-name"]}>Рент-зона</div>
          <div className={styles["information-description"]}>
            Аренда строительной техники
          </div>
        </div>
      </div>
    </section>
  );
}
