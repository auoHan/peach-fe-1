import s from '@/components/Welcome/welcome.module.scss'
export const Second = () => {
	return (
		<div class={s.card}>
			<svg>
				<use xlinkHref="#clock"></use>
			</svg>
			<h2>
				每日提醒
				<br />
				不遗漏每一笔账单
			</h2>
		</div>
	)
}
Second.displayName = 'Second'
