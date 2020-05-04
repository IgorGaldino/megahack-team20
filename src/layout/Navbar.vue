<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="primary">
			<router-link to="/">
				<b-navbar-brand>
					<img src="@/assets/icons/logo.svg" width="30" height="30" class="logo" /><b>Fika</b>Fácil {{ getName() }}
				</b-navbar-brand>
			</router-link>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<!-- <b-navbar-nav class="ml-auto">

        </b-navbar-nav> -->

				<b-navbar-nav class="ml-auto">
					<b-nav-item href="#/home" class="item-menu"
						><span>Início</span></b-nav-item
					>
					<b-nav-item href="#cadastrar" class="item-menu"
						><span>Cadastro</span></b-nav-item
					>
					<!-- <b-nav-form>
            <b-button href="#cadastrar" size="md" class="my-2 mr-3 my-sm-0" variant="btn btn-light">
              Cadastrar
            </b-button>
          </b-nav-form> -->
					<b-nav-item-dropdown right>
						<template v-slot:button-content>
							<img
								class="rounded-circle"
								src="@/assets/img/user.png"
								width="40"
								height="40"
								alt
							/>
						</template>
						<b-dropdown-item href="#">Configurar Perfil</b-dropdown-item>
						<b-dropdown-item v-if="this.$route.name !== 'Estabelecimento'" @click="route()">Minha Loja</b-dropdown-item>
						<b-dropdown-item @click="$router.push('/')">Sair</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
	data () {
		return {}
	},
	methods: {
		getName () {
			return this.$route.name == 'Estabelecimento'
				? `/ ${this.$route.params.name}`
				: ''
		},
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
	},
	computed: {}
}
</script>

<style scoped>
span {
	color: #fff;
}

.item-menu {
	padding: 10px;
	border-radius: 5px;
	color: white;
}

.item-menu:hover {
	background-color: #00000036;
}

.logo {
	margin-bottom: 4px;
  margin-right: 5px;
}

@media (max-width: 480px) {
	.fontImage {
		display: none;
	}
}
</style>
