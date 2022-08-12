import { FunctionalComponent } from 'vue'
import s from '@/components/Welcome/WelcomeLayout.module.scss'
export const WelcomeLayoute: FunctionalComponent = (
	props,
	{ slots: { icon, title, buttons } }
) => {
	return (
		<div class={s.wrapper}>
			<div class={s.card}>
				{icon?.()}
				{title?.()}
			</div>
			<div class={s.actions}>{buttons?.()}</div>
		</div>
	)
}
WelcomeLayoute.displayName = 'WelcomeLayoute'
