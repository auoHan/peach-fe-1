import { First } from '@/components/Welcome/First/First'
import { Forth } from '@/components/Welcome/Forth/Forth'
import { Second } from '@/components/Welcome/Second/Second'
import { Third } from '@/components/Welcome/Third/Third'
import { Welcome } from '@/views/welcome'
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
