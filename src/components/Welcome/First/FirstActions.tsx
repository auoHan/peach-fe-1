import s from '@/components/Welcome/welcome.module.scss'
import { SkipFeatures } from '@/shared/SkipFeatures/SkipFeatures'
import { RouterLink } from 'vue-router'
export const FirstActions = () => {
	return (
		<div class={s.actions}>
			<SkipFeatures class={s.fake} />
			<RouterLink to="/welcome/2">下一页</RouterLink>
			<SkipFeatures class={s.fake} />
		</div>
	)
}

FirstActions.displayName = 'FirstActions'
