import s from '@/components/Welcome/WelcomeLayout.module.scss'
import chart from '@/assets/icons/welcome/chart.svg'
import { RouterLink } from 'vue-router'
import { WelcomeLayoute } from './WelcomeLayout'
export const Third = () => {
	return (
		<WelcomeLayoute>
			{{
				icon: () => <img class={s.icon} src={chart} />,
				title: () => (
					<h2>
						数据可视化
						<br />
						收支一目了然
					</h2>
				),
				buttons: () => (
					<>
						<RouterLink to="/start" class={s.fake}>
							跳过
						</RouterLink>
						<RouterLink to="/welcome/4">下一页</RouterLink>
						<RouterLink to="/start">跳过</RouterLink>
					</>
				)
			}}
		</WelcomeLayoute>
	)
}
Third.displayName = 'Third'
