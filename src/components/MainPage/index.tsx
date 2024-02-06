import AboutUs from '../AboutUs';
import ComponentsContainer from '../ComponentsContainer';
import Contacts from '../Contacts';
import Faq from '../Faq';
import Footer from '../Footer';
import Guarantee from '../Guarantee/index';
import Interaction from '../Interaction/index';
import Navbar from '../Navbar';
//import Popup from '../Popup';
import Portfolio from '../Portfolio';
import Promo from '../Promo';
import Recommendations from '../Recommendations';
import Services from '../Services';
import StageCreate from '../StageCreate';
import TechStack from '../TechStack';
//import ProjectDescriptionModal from "../ProjectDescriptionModal";
//import Popup from '../Popup';
//import WebsiteCreationModal from '../WebsiteCreationModal';
import Choice from '../Сhoice';
import styles from './style.module.scss';

// TODO
// - Фикс текста формы обратной связи в "Промо".
// Cтатус готово

// - Фикс бэкграунда в блоке "Промо".
// Cтатус готово

// - Добавить градиентный переход с блока "Промо" в блок "О нас".
// Cтатус готово

// - Добавить новую фичу в FAQ: ответу добавить фон.
// Cтатус готоово

// - Фикс заголовка по макету в блоке "FAQ".
// Cтатус готово

// - Добавить в блок "Отзывы и рекомендации" ссылки на клиентов в аватарку и заголовок.
// Cтатус готово

// Так же сделать блок с отзывами именно cursor: pointer; сейчас там рука другая какая-то.
// Cтатус готово

// - Фикс padding-top в "Этапы создания сайта" и там же фикс шрифта в тексте, в кнопке.
// Cтатус готово

export default function MainPage() {
	return (
		<main className={styles.main}>
			{/* <ProjectDescriptionModal /> */}
			{/* <Popup isSuccess={true} /> */}
			<Navbar />
			<Promo />
			<ComponentsContainer>
				<AboutUs />
				<Services />
				<Portfolio />
			</ComponentsContainer>
			<StageCreate />
			<Recommendations />
			<Choice />
			<Guarantee />
			<Interaction />
			<TechStack />
			<ComponentsContainer>
				<Faq />
				<Contacts />
				<Footer />
			</ComponentsContainer>
		</main>
	);
}
