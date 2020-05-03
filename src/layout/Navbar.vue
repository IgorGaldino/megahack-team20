<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <router-link to="/">
        <b-navbar-brand><i class="ti-shopping-cart"></i> <b>Fika</b>Fácil {{getName()}} </b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-button href="#cadastrar" size="md" class="my-2 mr-3 my-sm-0" variant="btn btn-light">
              Cadastrar
            </b-button>
          </b-nav-form>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <img class="rounded-circle" src="http://placehold.it/40x40" alt />
            </template>
            <b-dropdown-item href="#">Configurar Perfil</b-dropdown-item>
            <b-dropdown-item @click="$router.push('/estabelecimento')">Minha Loja</b-dropdown-item>
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
			return this.$route.name == 'Estabelecimento' ? ' / pizzaria-2-irmaos' : ''
		}
	},
	computed: {}
}
</script>

<style scoped>
span {
  color: #fff;
}
@media (max-width: 480px) {
  .fontImage {
    display: none;
  }
}
</style>
