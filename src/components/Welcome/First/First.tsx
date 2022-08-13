import { defineComponent } from 'vue'
import s from '@/components/Welcome/welcome.module.scss'
import pig from '@/assets/icons/welcome/pig.svg'
export const First = defineComponent({
	setup: (props, context) => {
		return () => (
			<div class={s.card}>
				<img src={pig} class={s.icon} />
				<h2>
					会挣钱
					<br />
					还会省钱
				</h2>
			</div>
		)
	}
})
