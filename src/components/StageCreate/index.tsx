'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import Image from 'next/image';

import { stages } from '@/constants/StageCreate';
import { IStagesItem } from '@/constants/StageCreate/type';

import styles from './style.module.scss';

export default function StageCreate() {
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	const [activeStage, setActiveStage] = useState(stages[0]);
	const [animationClassName, setAnimationClassName] = useState('');
	const [hovered, setHovered] = useState(false);

	const stagesProps = stages.map((item) => {
		return { ...item, active: false };
	});
	stagesProps[0].active = true;

	function handleClick(stage: IStagesItem) {
		setAnimationClassName('slide-out');
		setTimeout(() => {
			setAnimationClassName('slide-in');
			setActiveStage(stage);
		}, 1000);
	}

	return (
		<section className={styles['stage']} ref={ref}>
			<div className={styles['stage__block']}>
				<h2 className={styles['stage__title']}>Этапы создания сайта</h2>
				<Image
					src={hovered ? activeStage.iconHover : activeStage.icon}
					alt={activeStage.alt}
					className={`${styles['stage__icon-wrapper']} ${hovered ? styles['stage__icon-wrapper_hovered'] : ''} ${styles[`image__${animationClassName}`]} ${styles[`image${inView ? '__slide-in' : ''}`]}`}
					onMouseOver={() => {
						setHovered(true);
					}}
					onMouseOut={() => {
						setHovered(false);
					}}
				/>
				<div className={styles['stage__wrapper']}>
					{stagesProps.map((item, idx) => {
						return (
							<button
								type="button"
								className={`${styles['stage__item']} ${
									activeStage.id == item.id ? styles['stage__item_active'] : ''
								}`}
								key={item.id}
								data-id={item.id}
								onClick={() => handleClick(item)}
							>
								{idx + 1}
							</button>
						);
					})}
				</div>
				<h3
					className={`${styles['stage__heading']} ${styles[`text__${animationClassName}`]} ${styles[`text${inView ? '__slide-in' : ''}`]}`}
				>
					{activeStage.title}
				</h3>
				<p
					className={`${styles['stage__description']} ${styles[`text__${animationClassName}`]} ${styles[`text${inView ? '__slide-in' : ''}`]}`}
				>
					{activeStage.description}
				</p>
				<button
					type="button"
					className={`${styles['stage__btn']} ${styles[`button__${animationClassName}`]} ${styles[`button${inView ? '__slide-in' : ''}`]}`}
					data-id={activeStage.next}
					onClick={() => {
						return handleClick(
							stages.filter((item) => item.id == activeStage.next)[0]
						);
					}}
				>
					Следующий этап
				</button>
			</div>
		</section>
	);
}
