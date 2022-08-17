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
import { ItemPage } from '@/views/ItemPage'
import { StartPage } from '@/views/StartPage'
import { TagPage } from '@/views/TagPage'
import { Welcome } from '@/views/Welcome'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		redirect: '/welcome'
	},
	{
		path: '/welcome',
		component: Welcome,
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
	{ path: '/start', component: StartPage },
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
			{ path: ':id', component: TagEdit }
		]
	}
]

export const router = createRouter({
	routes,
	history: createWebHashHistory()
})
