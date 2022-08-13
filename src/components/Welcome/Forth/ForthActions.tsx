import s from '@/components/Welcome/welcome.module.scss'
import { RouterLink } from 'vue-router'
export const ForthActions = () => {
	return (
		<div class={s.actions}>
			<RouterLink class={s.fake} to="/start">
				跳过
			</RouterLink>
			<RouterLink to="/start">完成</RouterLink>
			<RouterLink class={s.fake} to="/start">
				跳过
			</RouterLink>
		</div>
	)
}

ForthActions.displayName = 'ForthActions'
