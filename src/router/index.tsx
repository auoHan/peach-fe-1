import { ItemCreate } from '@/components/Item/Create/ItemCreate'
import { ItemList } from '@/components/Item/List/ItemList'
import { TagCreate } from '@/components/Tag/TagCreate'
import { TagEdit } from '@/components/Tag/TagEdit'
import { First } from '@/components/Welcome/First/First'
import { FirstActions } from '@/components/Welcome/First/FirstActions'
import { Forth } from '@/components/Welcome/Forth/Forth'
import { ForthActions } from '@/components/Welcome/Forth/ForthActions'
import { Second } from '@/components/Welcome/Second/Second'
import { SecondActions } from '@/components/Welcome/Second/SecondActions'
import { Third } from '@/components/Welcome/Third/Third'
import { ThirdActions } from '@/components/Welcome/Third/ThirdActions'
import { ComingSoon } from '@/shared/ComingSoon/ComingSoon'
import { useMeStore } from '@/stores/useMeStore'
import { ItemPage } from '@/views/ItemPage'
import { SignInPage } from '@/views/SignInPage'
import { StatisticsPage } from '@/views/StatisticsPage'
import { TagPage } from '@/views/TagPage'
import { Welcome } from '@/views/Welcome'
import { storeToRefs } from 'pinia'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/welcome'
	},
	{
		path: '/welcome',
		component: Welcome,
		beforeEnter: (to, from, next) => {
			localStorage.getItem('skipFeatures') === 'yes' ? next('/items') : next()
		},
		children: [
			{
				path: '',
				redirect: '/welcome/1'
			},
			{ path: '', redirect: '/welcome/1' },
			{
				path: '1',
				name: 'Welcome1',
				components: { main: First, footer: FirstActions }
			},
			{
				path: '2',
				name: 'Welcome2',
				components: { main: Second, footer: SecondActions }
			},
			{
				path: '3',
				name: 'Welcome3',
				components: { main: Third, footer: ThirdActions }
			},
			{
				path: '4',
				name: 'Welcome4',
				components: { main: Forth, footer: ForthActions }
			}
		]
	},
	{
		path: '/items',
		component: ItemPage,
		children: [
			{ path: '', component: ItemList },
			{ path: 'create', component: ItemCreate }
		]
	},
	{
		path: '/tags',
		component: TagPage,
		children: [
			{ path: 'create', component: TagCreate },
			{ path: ':id/edit', component: TagEdit }
		]
	},
	{
		path: '/sign_in',
		component: SignInPage
	},
	{
		path: '/statistics',
		component: StatisticsPage
	},
	{
		path: '/export',
		component: ComingSoon
	},
	{
		path: '/notify',
		component: ComingSoon
	}
]

export const router = createRouter({
	routes,
	history: createWebHashHistory()
})

const meStore = useMeStore()
meStore.fetchMe()

router.beforeEach(async (to, from) => {
	const { mePromise } = storeToRefs(meStore)
	if (
		to.path === '/' ||
		to.path.startsWith('/welcome') ||
		to.path.startsWith('/sign_in') ||
		to.path === '/items'
	) {
		return true
	} else {
		const path = await mePromise!.value!.then(
			() => true,
			() => '/sign_in?return_to=' + from.path
		)
		return path
	}
})
