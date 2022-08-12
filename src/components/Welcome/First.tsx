import { defineComponent } from 'vue'
import s from '@/components/Welcome/WelcomeLayout.module.scss'
import pig from '@/assets/icons/welcome/pig.svg'
import { RouterLink } from 'vue-router'
import { WelcomeLayoute } from './WelcomeLayout'
export const First = defineComponent({
	setup: (props, context) => {
		const slots = {
			icon: () => <img class={s.icon} src={pig} />,
			title: () => (
				<h2>
					会挣钱
					<br />
					还要会省钱
				</h2>
			),
			buttons: () => (
				<>
					<RouterLink to="/start" class={s.fake}>
						跳过
					</RouterLink>
					<RouterLink to="/welcome/2">下一页</RouterLink>
					<RouterLink to="/start">跳过</RouterLink>
				</>
			)
		}
		return () => <WelcomeLayoute v-slots={slots} />
	}
})
