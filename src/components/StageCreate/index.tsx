import styles from './style.module.scss';

export default function StageCreate() {
	return (
		<div className={styles.stageCreate}>
			<svg
				className={styles.icon}
				width="78"
				height="142"
				viewBox="0 0 78 142"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clip-path="url(#clip0_890_3203)">
					<path
						d="M38.9696 50.6463V70.751L55.2075 80.126M38.9696 106.939C22.8272 97.6196 9.74121 73.8623 9.74121 53.876C9.74121 33.8896 22.8272 25.2427 38.9696 34.5625C55.1119 43.8823 68.1979 67.6396 68.1979 87.626C68.1979 107.612 55.1119 116.259 38.9696 106.939Z"
						stroke="#263694"
						stroke-width="7.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</g>
			</svg>

			<div className={styles.stageCreate__block}>
				<h2 className={styles.stageCreate__block_title}>
					Этапы создания сайта
				</h2>
				<div className={styles.stageCreate__block_stages}>
					<p
						className={
							styles.stageCreate__block_stage +
							' ' +
							styles.stageCreate__block_stage__one
						}
					>
						1
					</p>
					<p className={styles.stageCreate__block_line}></p>
					<p className={styles.stageCreate__block_stage}>2</p>
					<p className={styles.stageCreate__block_line}></p>
					<p className={styles.stageCreate__block_stage}>3</p>
					<p className={styles.stageCreate__block_line}></p>
					<p className={styles.stageCreate__block_stage}>4</p>
					<p className={styles.stageCreate__block_line}></p>
					<p className={styles.stageCreate__block_stage}>5</p>
					<p className={styles.stageCreate__block_line}></p>
					<p className={styles.stageCreate__block_stage}>6</p>
					<p className={styles.stageCreate__block_line}></p>
					<p className={styles.stageCreate__block_stage}>7</p>
					<p className={styles.stageCreate__block_line}></p>
					<p className={styles.stageCreate__block_stage}>8</p>
					<p className={styles.stageCreate__block_line}></p>
					<p className={styles.stageCreate__block_stage}>9</p>
					<p className={styles.stageCreate__block_line}></p>
					<p
						className={
							styles.stageCreate__block_stage +
							' ' +
							styles.stageCreate__block_stage__ten
						}
					>
						10
					</p>
				</div>
				<p className={styles['stageCreate__block_plan']}>Планирование</p>
				<p className={styles['stageCreate__block_description']}>
					Определение целей, целевой аудитории и основных требований к сайту,
					создание структуры сайта, и разработка технического задания.
				</p>
				<button className={styles['stageCreate__block_btn']}>
					Следующий этап
				</button>
			</div>
		</div>
	);
}
