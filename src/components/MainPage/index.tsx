import ComponentsContainer from "../ComponentsContainer";
import Choice from "../Сhoice";
import Recommendations from "../Recommendations";
import styles from "./style.module.scss";

export default function MainPage() {
  return (
    <main className={styles.main}>
      <ComponentsContainer>
        <div
          style={{
            height: "200px",
            width: "100vw",
          }}
        />
      </ComponentsContainer>
      <Recommendations />
      <ComponentsContainer>
        <div
          style={{
            height: "200px",
            width: "100vw",
          }}
        />
      </ComponentsContainer>
    </main>
  );
}
