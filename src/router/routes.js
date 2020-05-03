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
				path: 'novo-estabelecimento',
				name: 'Cadastro',
				component: () => import('../views/estabelecimento/Cadastro.vue')
			},
			{
				path: 'produtos',
				name: 'Produtos',
				component: () => import('../views/product/Produto.vue')
			}
		]
	},
	{
		path: '*',
		redirect: '/'
	}
]

export default routes
