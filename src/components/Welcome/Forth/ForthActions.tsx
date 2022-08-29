import s from '@/components/Welcome/welcome.module.scss'
import { SkipFeatures } from '@/shared/SkipFeatures/SkipFeatures'
import { RouterLink } from 'vue-router'
const onClick = () => {
	localStorage.setItem('skipFeatures', 'yes')
}
export const ForthActions = () => {
	return (
		<div class={s.actions}>
			<SkipFeatures class={s.fake} />
			<span onClick={onClick}>
				<RouterLink to="/items">完成</RouterLink>
			</span>
			<SkipFeatures class={s.fake} />
		</div>
	)
}

ForthActions.displayName = 'ForthActions'
