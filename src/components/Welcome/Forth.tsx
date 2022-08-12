import s from '@/components/Welcome/WelcomeLayout.module.scss'
import cloud from '@/assets/icons/welcome/cloud.svg'
import { RouterLink } from 'vue-router'
import { WelcomeLayoute } from './WelcomeLayout'
export const Forth = () => {
	return (
		// 另一种插槽写法
		<WelcomeLayoute>
			{{
				icon: () => <img class={s.icon} src={cloud} />,
				title: () => (
					<h2>
						云备份
						<br />
						再也不怕数据丢失
					</h2>
				),
				buttons: () => (
					<>
						<RouterLink to="/start" class={s.fake}>
							跳过
						</RouterLink>
						<RouterLink to="/start">完成</RouterLink>
						<RouterLink class={s.fake} to="/start">
							跳过
						</RouterLink>
					</>
				)
			}}
		</WelcomeLayoute>
	)
}
Forth.displayName = 'Forth'
