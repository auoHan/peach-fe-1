import { defineComponent } from 'vue'
import { Button } from '@/shared/button/Button'
import s from './StartPage.module.scss'
import { FloatButton } from '@/shared/button/FloatButton'
import { Icon } from '@/shared/icon/Icon'
import { Center } from '@/shared/center/Center'
import { Navbar } from '@/shared/navbar/Navbar'
export const StartPage = defineComponent({
	setup: (props, context) => {
		return () => (
			<div>
				<Navbar>
					{{
						default: '蜜桃记账',
						icon: <Icon name="menu" class={s.navIcon} />
					}}
				</Navbar>
				<Center class={s.pig_wrapper}>
					<Icon name="pig" class={s.pig} />
				</Center>
				<div class={s.button_wrapper}>
					<Button class={s.button}>开始记账</Button>
				</div>
				<FloatButton iconName="add" />
			</div>
		)
	}
})
