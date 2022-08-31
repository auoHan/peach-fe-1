import { ItemCreate } from '@/components/Item/Create/ItemCreate'
import { ItemList } from '@/components/Item/List/ItemList'
import { First } from '@/components/Welcome/First/First'
import { FirstActions } from '@/components/Welcome/First/FirstActions'
import { Forth } from '@/components/Welcome/Forth/Forth'
import { ForthActions } from '@/components/Welcome/Forth/ForthActions'
import { Second } from '@/components/Welcome/Second/Second'
import { SecondActions } from '@/components/Welcome/Second/SecondActions'
import { Third } from '@/components/Welcome/Third/Third'
import { ThirdActions } from '@/components/Welcome/Third/ThirdActions'
import { useMeStore } from '@/stores/useMeStore'
import { storeToRefs } from 'pinia'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/welcome'
	},
	{
		path: '/welcome',
		component: () => import('@/views/Welcome'),
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
		component: () => import('@/views/ItemPage'),
		children: [
			{ path: '', component: ItemList },
			{ path: 'create', component: ItemCreate }
		]
	},
	{
		path: '/tags',
		component: () => import('@/views/TagPage'),
		children: [
			{
				path: 'create',
				component: () => import('@/components/Tag/TagCreate')
			},
			{ path: ':id/edit', component: () => import('@/components/Tag/TagEdit') }
		]
	},
	{
		path: '/sign_in',
		component: () => import('@/views/SignInPage')
	},
	{
		path: '/statistics',
		component: () => import('@/views/StatisticsPage')
	},
	{
		path: '/export',
		component: () => import('@/shared/ComingSoon/ComingSoon')
	},
	{
		path: '/notify',
		component: () => import('@/shared/ComingSoon/ComingSoon')
	}
]

export const router = createRouter({
	routes,
	history: createWebHashHistory()
})

router.beforeEach(async (to, from) => {
	const meStore = useMeStore()
	meStore.fetchMe()
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
