<template>
	<div>
		<header class="masthead text-white text-center">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-xl-9 mx-auto">
						<h3 class="mb-5">Encontre Serviços ou Produtos de Forma Fácil!</h3>
					</div>

					<div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
						<h5 class="text-center">Busque por um vendedor</h5>
						<div class="form-row">
							<b-input-group>
								<template v-slot:append>
									<b-input-group-text>
										<strong class="text-dark">
											<b-icon-link @click="route()" />
										</strong>
									</b-input-group-text>
								</template>
								<b-form-input
									@keyup.enter="route()"
								/>
							</b-input-group>
						</div>
						<br />
					</div>

					<div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
						<h5 class="text-center">Ou Busque por Produtos ou Serviços</h5>
						<div class="form-row">
							<b-input-group>
								<template v-slot:append>
									<b-input-group-text>
										<strong class="text-dark">
											<b-icon-search @click="route()" />
										</strong>
									</b-input-group-text>
								</template>
								<b-form-input @keyup.enter="route()" />
							</b-input-group>
						</div>
						<a href="#" class="badge badge-primary">
							Usar minha localização
							<b-icon icon="geo-alt"></b-icon>
						</a>
					</div>
				</div>
			</div>
		</header>
		<!-- About section-->
		<section class="page-section bg-primary pt-5 pb-5" id="cadastrar">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8 text-center">
						<h2 class="text-white mt-0">Faça seu cadastro gratuitamente!</h2>
						<hr class="divider light my-4" />
						<p class="text-white-50 mb-4">
							Cadastre-se de forma gratuita e comece a gerenciar suas vendas
							online. É rápido fácil e o melhor, totalmente gratuito!
						</p>
						<ul class="text-white text-left">
							<li>Sem Taxa de Adesão</li>
							<li>Sem Mensalidade</li>
							<li>Sem Taxa por Venda</li>
							<li>Sem Limite de Pedidos</li>
							<li>Sem Limite de Acessos</li>
							<li>Sem Taxa de Hospedagem</li>
						</ul>
						<b-form-group
							class="col-md-12 text-white"
							label="Quero me Cadastrar!"
							label-size="lg"
						>
							<router-link to="/novo-cliente">
								<b-button class="mr-2" variant="light">Cliente</b-button>
							</router-link>
							<router-link to="/novo-estabelecimento">
								<b-button variant="light">Comerciante</b-button>
							</router-link>
						</b-form-group>
						<!-- <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Quero me Cadastrar!</a> -->
					</div>
				</div>
			</div>
		</section>
		<!-- Icons Grid -->
		<section class="features-icons bg-light text-center">
			<div class="container">
				<h1 class="pb-4">Como Funciona</h1>
				<div class="row">
					<div class="col-lg-3" v-for="(card, index) in cards" :key="index">
						<div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
							<div class="features-icons-icon d-flex">
								<b-icon
									:icon="card.icon"
									class="m-auto text-primary"
									scale="5"
								></b-icon>
							</div>
							<h3>{{ card.title }}</h3>
							<p class="lead mb-0">{{ card.description }}</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="testimonials text-center bg-gray pt-4" id="equipe">
			<div class="container">
				<h2 class="mb-5">Time 20</h2>
				<div class="row">
					<div class="col-lg-4">
						<div class="testimonial-item mx-auto mb-5 mb-lg-0">
							<img
								class="img-fluid rounded-circle mb-3"
								src="../../assets/img/igor.svg"
								alt
							/>
							<h5>Igor Galdino</h5>
							<p class="font-weight-light mb-0">Desenvolvedor Frontend</p>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="testimonial-item mx-auto mb-5 mb-lg-0">
							<img
								class="img-fluid rounded-circle mb-3"
								src="../../assets/img/luan.svg"
								alt
							/>
							<h5>Luan Douglas</h5>
							<p class="font-weight-light mb-0">Desenvolvedor Mobile</p>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="testimonial-item mx-auto mb-5 mb-lg-0">
							<img
								class="img-fluid rounded-circle mb-3"
								src="../../assets/img/marcos.svg"
								alt
							/>
							<h5>Marcos Antônio</h5>
							<p class="font-weight-light mb-0">Desenvolvedor Fullstack</p>
						</div>
					</div>
					<div class="col-lg-2 pt-3"></div>
					<div class="col-lg-4 pt-3">
						<div class="testimonial-item mx-auto mb-5 mb-lg-0">
							<img
								class="img-fluid rounded-circle mb-3"
								src="../../assets/img/matheus.svg"
								alt
							/>
							<h5>Matheus Gurgel</h5>
							<p class="font-weight-light mb-0">Desenvolvedor Fullstack</p>
						</div>
					</div>
					<div class="col-lg-4 pt-3">
						<div class="testimonial-item mx-auto mb-5 mb-lg-0">
							<img
								class="img-fluid rounded-circle mb-3"
								src="../../assets/img/werlesson.svg"
								alt
							/>
							<h5>Werlesson</h5>
							<p class="font-weight-light mb-0">Desenvolvedor Frontend</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	data () {
		return {
			cards: [
				{
					icon: 'laptop',
					title: 'Cadastre seu Negócio',
					description:
						'Cadastre-se gratuitamente e sem nenhum custo como vendedor'
				},
				{
					icon: 'search',
					title: 'Seja Encontrado Por Seus Clientes',
					description: 'Disponibilize suas informações de contato e produtos'
				},
				{
					icon: 'eye',
					title: 'Ganhe Visibilidade',
					description: 'Seu negócio visível para todos com 1 click'
				},
				{
					icon: 'bag',
					title: 'Venda',
					description: 'Receba pedidos e feche negócio dentro da plataforma'
				}
			]
		}
	},

	created () {},
	methods: {
		route () {
			const aux = Math.floor(Math.random() * (3 - 0)) + 0
			switch (aux) {
			case 0:
				this.$router.push('/fikafacil/pizzaria-2-irmaos')
				break
			case 1:
				this.$router.push('/fikafacil/mercadinho-mix')
				break
			case 2:
				this.$router.push('/fikafacil/padaria-ferragens')
				break
			}
		}
	}
}
</script>

<style lang="css" scoped>
body {
	font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: 700;
}

header.masthead {
	position: relative;
	background-color: #0d738b;
	background: url("../../assets/img/background_1080.svg") no-repeat center
		center;
	background-size: cover;
	padding-top: 8rem;
	padding-bottom: 8rem;
}

header.masthead .overlay {
	position: absolute;
	background-color: #212529;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	opacity: 0.3;
}

header.masthead h1 {
	font-size: 2rem;
}

@media (min-width: 768px) {
	header.masthead {
		padding-top: 12rem;
		padding-bottom: 12rem;
	}
	header.masthead h1 {
		font-size: 3rem;
	}
}

.showcase .showcase-text {
	padding: 3rem;
}

.showcase .showcase-img {
	min-height: 30rem;
	background-size: cover;
}

@media (min-width: 768px) {
	.showcase .showcase-text {
		padding: 7rem;
	}
}

.features-icons {
	padding-top: 7rem;
	padding-bottom: 7rem;
}

.features-icons .features-icons-item {
	max-width: 20rem;
}

.features-icons .features-icons-item .features-icons-icon {
	height: 7rem;
}

.features-icons .features-icons-item .features-icons-icon i {
	font-size: 4.5rem;
}

.features-icons .features-icons-item:hover .features-icons-icon i {
	font-size: 5rem;
}

.testimonials {
	padding-top: 7rem;
	padding-bottom: 7rem;
}

.testimonials .testimonial-item {
	max-width: 12rem;
}

.testimonials .testimonial-item img {
	max-width: 12rem;
	box-shadow: 0px 5px 5px 0px #adb5bd;
}

.call-to-action {
	position: relative;
	background-color: #343a40;
	background: url("../../assets/img/background_720.svg") no-repeat center center;
	background-size: cover;
	padding-top: 7rem;
	padding-bottom: 7rem;
}

.call-to-action .overlay {
	position: absolute;
	background-color: #212529;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	opacity: 0.3;
}

.bg-gray {
	background-color: #f0eeee;
}
</style>
