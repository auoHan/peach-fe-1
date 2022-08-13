import { defineComponent } from 'vue'
import { Button } from '@/shared/button/Button'
import s from './StartPage.module.scss'
import { FloatButton } from '@/shared/button/FloatButton'
import { Icon } from '@/shared/icon/Icon'
import { Center } from '@/shared/center/Center'
export const StartPage = defineComponent({
	setup: (props, context) => {
		const onClick = () => {
			console.log('hi')
		}
		return () => (
			<div>
				<nav>menu</nav>
				<Center class={s.pig_wrapper}>
					<Icon name="pig" class={s.pig} />
				</Center>
				<div class={s.button_wrapper}>
					<Button class={s.button} onClick={onClick}>
						测试
					</Button>
				</div>
				<FloatButton iconName="add" />
			</div>
		)
	}
})
