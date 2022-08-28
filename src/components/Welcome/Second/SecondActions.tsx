import s from '@/components/Welcome/welcome.module.scss'
import { SkipFeatures } from '@/shared/SkipFeatures/SkipFeatures'
import { RouterLink } from 'vue-router'
export const SecondActions = () => {
	return (
		<div class={s.actions}>
			<SkipFeatures class={s.fake} />
			<RouterLink to="/welcome/3">下一页</RouterLink>
			<SkipFeatures />
		</div>
	)
}

SecondActions.displayName = 'SecondActions'
