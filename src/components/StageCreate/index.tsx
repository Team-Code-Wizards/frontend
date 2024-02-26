'use client';

import { useState } from 'react';

import Image from 'next/image';

import { stages } from '@/constants/StageCreate';
import { IStagesItem } from '@/constants/StageCreate/type';

import styles from './style.module.scss';

export default function StageCreate() {
	const [activeStage, setActiveStage] = useState(stages[0]);
	// const [isActive, setIsActive] = useState(false);
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

	// useEffect(() => {
	// 	// setIsActive(false);
	// 	setIsActive(true);
	// }, [activeStage]);

	// useEffect(() => {
	// 	console.log(stages);
	// });

	return (
		<section className={styles['stage']}>
			<div className={styles['stage__block']}>
				<h2 className={styles['stage__title']}>Этапы создания сайта</h2>
				<Image
					src={hovered ? activeStage.iconHover : activeStage.icon}
					alt={activeStage.alt}
					className={`${styles['stage__icon-wrapper']} ${hovered ? styles['stage__icon-wrapper_hovered'] : ''} ${styles[`image__${animationClassName}`]}`}
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
					// className={styles['stage__heading']}
					// className={`${styles['stage__heading']} ${isActive && styles['stage__heading_slide-in']}`}
					className={`${styles['stage__heading']} ${styles[`text__${animationClassName}`]}`}
					// onAnimationEnd={() => setAnimationClassName('')}
				>
					{activeStage.title}
				</h3>
				<p
					// className={styles['stage__description']}
					className={`${styles['stage__description']} ${styles[`text__${animationClassName}`]}`}
				>
					{activeStage.description}
				</p>
				<button
					type="button"
					// className={styles['stage__btn']}
					className={`${styles['stage__btn']} ${styles[`button__${animationClassName}`]}`}
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
