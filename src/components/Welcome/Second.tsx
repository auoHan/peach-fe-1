import s from '@/components/Welcome/WelcomeLayout.module.scss'
import clock from '@/assets/icons/welcome/clock.svg'
import { RouterLink } from 'vue-router'
import { WelcomeLayoute } from './WelcomeLayout'
export const Second = () => {
	return (
		<WelcomeLayoute>
			{{
				icon: () => <img class={s.icon} src={clock} />,
				title: () => (
					<h2>
						每日提醒
						<br />
						不遗漏每一笔账单
					</h2>
				),
				buttons: () => (
					<>
						<RouterLink to="/start" class={s.fake}>
							跳过
						</RouterLink>
						<RouterLink to="/welcome/3">下一页</RouterLink>
						<RouterLink to="/start">跳过</RouterLink>
					</>
				)
			}}
		</WelcomeLayoute>
	)
}
Second.displayName = 'Second'
