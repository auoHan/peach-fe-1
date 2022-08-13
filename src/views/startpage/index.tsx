import { defineComponent, ref } from 'vue'
import { Button } from '@/shared/button/Button'
import s from './StartPage.module.scss'
import { FloatButton } from '@/shared/button/FloatButton'
import { Icon } from '@/shared/icon/Icon'
import { Center } from '@/shared/center/Center'
import { Navbar } from '@/shared/navbar/Navbar'
import { Overlay } from '@/shared/overlay/Overlay'
import { RouterLink } from 'vue-router'
export const StartPage = defineComponent({
	setup: (props, context) => {
		const refOverlayVisible = ref(false)
		const onClickMenu = () => {
			refOverlayVisible.value = !refOverlayVisible.value
		}
		return () => (
			<div>
				<Navbar>
					{{
						default: () => '蜜桃记账',
						icon: () => (
							<Icon name="menu" class={s.navIcon} onClick={onClickMenu} />
						)
					}}
				</Navbar>
				<Center class={s.pig_wrapper}>
					<Icon name="pig" class={s.pig} />
				</Center>
				<div class={s.button_wrapper}>
					<RouterLink to="/items/create">
						<Button class={s.button}>开始记账</Button>
					</RouterLink>
				</div>
				<RouterLink to="/items/create">
					<FloatButton iconName="add" />
				</RouterLink>
				{refOverlayVisible.value && (
					<Overlay onClose={() => (refOverlayVisible.value = false)} />
				)}
			</div>
		)
	}
})
