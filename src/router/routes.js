import Layout from '@/layout/Layout.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	},
	{
		path: '/',
		component: Layout,
		redirect: '/Home',
		children: [
			{
				path: 'login',
				name: 'Login',
				component: () => import('../views/login/Login.vue')
			},
			{
				path: 'register',
				name: 'Register',
				component: () => import('../views/login/Register.vue')
			},
			{
				path: 'novo-estabelecimento',
				name: 'Cadastro',
				component: () => import('../views/estabelecimento/Cadastro.vue')
			},
			{
				path: 'vendedor/:urlEstabelecimento',
				name: 'Vendedor',
				component: () => import('../views/vendedor/Vendedor.vue')
			}
		]
	},
	{
		path: '*',
		redirect: '/'
	}
]

export default routes
