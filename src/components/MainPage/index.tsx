import ComponentsContainer from "../ComponentsContainer";
import Contacts from "../Contacts";
import Interaction from "../Interaction/index";
import Choice from "../Сhoice/index";
import Recommendations from "../Recommendations";
import styles from "./style.module.scss";

export default function MainPage() {
  return (
    <>
      {/* Header */}
      <main className={styles.main}>
        {/* <ComponentsContainer > */}
        {/* О нас */}
        {/* Услуги */}
        {/* Портфолио */}
        {/* </ComponentsContainer> */}
        {/* Этапы создания */}
        <Recommendations />
        <Choice />
        {/* Гарантии */}
        <Interaction />
        {/* Тех арсенал */}
        <ComponentsContainer>
          {/* FAQ */}
          <Contacts />
          {/* Footer */}
        </ComponentsContainer>
      </main>
    </>
  );
}
