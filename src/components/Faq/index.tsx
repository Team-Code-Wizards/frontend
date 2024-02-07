'use client';

import { useState } from 'react';

import { FaqData } from '@/constants/Faq';

import FaqCard from './FaqCard';
import { IFaqCardProps } from './FaqCard/interface';
import styles from './styles.module.scss';

function Faq() {
	const faqCardProps = FaqData.map((item) => {
		return { ...item, active: false };
	});

	const [questions, setQuestions] = useState(faqCardProps);
	const handleClick = (question: IFaqCardProps) => {
		const newQuestionsState = questions.map((item) => {
			if (item.id === question.id) {
				return { ...question, active: !question.active };
			}
			return { ...item, active: false };
		});
		setQuestions(newQuestionsState);
	};

	return (
		<section className={styles.faq}>
			<h2 className={styles.faq__title}>
				Часто задаваемые вопросы &#40;FAQ&#41;
			</h2>
			<ul className={styles.faq__list}>
				{questions.map((item) => {
					return (
						<FaqCard key={item.id} item={item} handleClick={handleClick} />
					);
				})}
			</ul>
		</section>
	);
}

export default Faq;
