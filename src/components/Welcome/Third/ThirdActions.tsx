import s from '@/components/Welcome/welcome.module.scss'
import { SkipFeatures } from '@/shared/SkipFeatures/SkipFeatures'
import { RouterLink } from 'vue-router'
export const ThirdActions = () => {
	return (
		<div class={s.actions}>
			<SkipFeatures class={s.fake} />
			<RouterLink to="/welcome/4">下一页</RouterLink>
			<SkipFeatures />
		</div>
	)
}

ThirdActions.displayName = 'ThirdActions'
