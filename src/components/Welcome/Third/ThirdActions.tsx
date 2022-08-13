import s from '@/components/Welcome/welcome.module.scss'
import { RouterLink } from 'vue-router'
export const ThirdActions = () => {
	return (
		<div class={s.actions}>
			<RouterLink class={s.fake} to="/start">
				跳过
			</RouterLink>
			<RouterLink to="/welcome/4">下一页</RouterLink>
			<RouterLink to="/start">跳过</RouterLink>
		</div>
	)
}

ThirdActions.displayName = 'ThirdActions'
