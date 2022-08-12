import { First } from '@/components/Welcome/First'
import { Forth } from '@/components/Welcome/Forth'
import { Second } from '@/components/Welcome/Second'
import { Third } from '@/components/Welcome/Third'
import { Welcome } from '@/views/welcome'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/welcome',
		component: Welcome,
		children: [
			{
				path: '1',
				component: First
			},
			{
				path: '2',
				component: Second
			},
			{
				path: '3',
				component: Third
			},
			{
				path: '4',
				component: Forth
			}
		]
	}
]

export const router = createRouter({
	routes,
	history: createWebHashHistory()
})
