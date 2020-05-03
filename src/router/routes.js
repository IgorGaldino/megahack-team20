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
			},
			{
				path: 'novo-cliente',
				name: 'Cadastro',
				component: () => import('../views/cliente/Cadastro.vue')
			},
			{
				path: 'novo-estabelecimento',
				name: 'Cadastro',
				component: () => import('../views/estabelecimento/Cadastro.vue')
			},
			{
				path: 'estabelecimento',
				name: 'Estabelecimento',
				component: () => import('../views/estabelecimento/Estabelecimento.vue')
			},
			{
				path: "checarPedido",
				name: "ChecarPedido",
				component: () => import("../views/estabelecimento/Checkout.vue")
			},
			{
				path: 'novo-produto',
				name: 'Cadastro de Produto',
				component: () => import('../views/produto/Cadastro.vue')
			}
		]
	},
	{
		path: '*',
		redirect: '/'
	}
]

export default routes
