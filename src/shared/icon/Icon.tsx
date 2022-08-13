import { defineComponent, PropType } from 'vue'
import s from './Icon.module.scss'
export type IconName = 'chart' | 'clock' | 'cloud' | 'peach' | 'pig' | 'add'
export const Icon = defineComponent({
	props: {
		name: {
			type: String as PropType<IconName>,
			require: true
		}
	},
	setup: (props, context) => {
		return () => (
			<svg>
				<use xlinkHref={'#' + props.name}></use>
			</svg>
		)
	}
})
