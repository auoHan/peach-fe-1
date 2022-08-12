import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import logo from '@/assets/icons/peach.svg'
import s from '@/views/welcome/welcome.module.scss'
export const Welcome = defineComponent({
	setup: (props, context) => {
		return () => (
			<div class={s.wrapper}>
				<header>
					<img src={logo} />
					<h1>蜜桃记账</h1>
				</header>
				<div>
					<RouterView />
				</div>
			</div>
		)
	}
})
