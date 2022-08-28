import { defineComponent, onMounted, PropType, ref } from 'vue'
import { MainLayout } from '@/layouts/MainLayout'
import s from './ItemCreate.module.scss'
import { http } from '@/service/Http'
import { Icon } from '@/shared/Icon/Icon'
import { Tabs, Tab } from '@/shared/Tabs/Tabs'
import { InputPad } from '../InputPad/InputPad'
import { useTags } from '@/hooks/useTags'
import { Tags } from '../Tags/Tags'
export const ItemCreate = defineComponent({
	props: {
		name: {
			type: String as PropType<string>
		}
	},
	setup: (props, context) => {
		const refKind = ref('支出')
		const {
			tags: incomeTags,
			hasMore: hasMore2,
			fetchTags: fetchTags2
		} = useTags((page) => {
			return http.get<Resources<Tag>>('/tags', {
				kind: 'income',
				page: page + 1,
				_mock: 'tagIndex'
			})
		})
		return () => (
			<MainLayout class={s.layout}>
				{{
					title: () => '记一笔',
					icon: () => <Icon name="left" class={s.navIcon} />,
					default: () => (
						<>
							<div class={s.wrapper}>
								<Tabs v-model:selected={refKind.value} class={s.tabs}>
									<Tab name="支出">
										<Tags kind="expenses" />
									</Tab>
									<Tab name="收入">
										<Tags kind="income" />
									</Tab>
								</Tabs>
								<div class={s.inputPad_wrapper}>
									<InputPad />
								</div>
							</div>
						</>
					)
				}}
			</MainLayout>
		)
	}
})
