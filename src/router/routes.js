import Layout from '../layout/Layout.vue'

const routes = [
	{
		path: '/',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: 'home',
				name: 'Home',
				component: () => import('../views/Home.vue')
			}
		]
	},
	{
		path: '*',
		redirect: '/'
	}
]

export default routes
