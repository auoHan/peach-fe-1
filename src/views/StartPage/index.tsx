import { defineComponent, ref } from 'vue'
import { Button } from '@/shared/Button/Button'
import s from './StartPage.module.scss'
import { FloatButton } from '@/shared/Button/FloatButton'
import { Icon } from '@/shared/Icon/Icon'
import { Center } from '@/shared/Center/Center'
import { Overlay } from '@/shared/Overlay/Overlay'
import { RouterLink } from 'vue-router'
import { MainLayout } from '@/layouts/MainLayout'
export const StartPage = defineComponent({
	setup: (props, context) => {
		const refOverlayVisible = ref(false)
		const onClickMenu = () => {
			refOverlayVisible.value = !refOverlayVisible.value
		}
		return () => (
			<MainLayout>
				{{
					title: () => '蜜桃记账',
					icon: () => (
						<Icon name="menu" class={s.navIcon} onClick={onClickMenu} />
					),
					default: () => (
						<>
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
						</>
					)
				}}
			</MainLayout>
		)
	}
})