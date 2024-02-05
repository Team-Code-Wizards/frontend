'use client';

import { useState } from 'react';

import Image from 'next/image';

import { stages } from '@/constants/StageCreate';
import { IStagesItem } from '@/constants/StageCreate/type';

import styles from './style.module.scss';

export default function StageCreate() {
	const stagesProps = stages.map((item) => {
		return { ...item, active: false };
	});
	stagesProps[0].active = true;

	const [activeStage, setActiveStage] = useState(stages[0]);
	function handleClick(stage: IStagesItem) {
		setActiveStage(stage);
	}

	return (
		<section className={styles['stage']}>
			<div className={styles['stage__block']}>
				<h2 className={styles['stage__title']}>Этапы создания сайта</h2>
				<Image
					src={activeStage.icon}
					alt={activeStage.alt}
					className={styles['stage__icon-wrapper']}
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
				<h3 className={styles['stage__heading']}>{activeStage.title}</h3>
				<p className={styles['stage__description']}>
					{activeStage.description}
				</p>
				<button
					type="button"
					className={styles['stage__btn']}
					data-id={activeStage.next}
					onClick={() => {
						return handleClick(
							stages.filter((item) => item.id == activeStage.next)[0]
						);
					}}
				>
					{/* Add uid of next stage as a data attribute */}
					Следующий этап
				</button>
			</div>
		</section>
	);
}
