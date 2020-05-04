<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="primary">
			<router-link to="/">
				<b-navbar-brand
					><i class="ti-shopping-cart"></i> <b>Fika</b>Fácil {{ getName() }}
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
						<b-dropdown-item @click="$router.push('/estabelecimento')"
							>Minha Loja</b-dropdown-item
						>
						<b-dropdown-item @click="$router.push('/')">Sair</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		getName() {
			return this.$route.name == "Estabelecimento"
				? `/ ${this.$route.params.name}`
				: "";
		}
	},
	computed: {}
};
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

@media (max-width: 480px) {
	.fontImage {
		display: none;
	}
}
</style>
