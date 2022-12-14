import { defineComponent } from 'vue'
import s from '@/components/Welcome/welcome.module.scss'
export const First = defineComponent({
	setup: (props, context) => {
		return () => (
			<div class={s.card}>
				<svg>
					<use xlinkHref="#pig"></use>
				</svg>
				<h2>
					会挣钱
					<br />
					还会省钱
				</h2>
			</div>
		)
	}
})
