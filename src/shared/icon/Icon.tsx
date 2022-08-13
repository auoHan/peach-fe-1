import { defineComponent, PropType } from 'vue'
import s from './Icon.module.scss'
export type IconName =
	| 'chart'
	| 'clock'
	| 'cloud'
	| 'peach'
	| 'pig'
	| 'add'
	| 'menu'
	| 'charts'
	| 'notify'
	| 'export'
	| 'left'
export const Icon = defineComponent({
	props: {
		name: {
			type: String as PropType<IconName>,
			require: true
		},
		onClick: {
			type: Function as PropType<(e: MouseEvent) => void>
		}
	},
	setup: (props, context) => {
		return () => (
			<svg onClick={props.onClick}>
				<use xlinkHref={'#' + props.name}></use>
			</svg>
		)
	}
})
