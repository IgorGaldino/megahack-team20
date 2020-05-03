<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Facilite</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <img class="rounded-circle" src="http://placehold.it/40x40" alt="">
          </template>
          <b-dropdown-item href="#">Configurar Perfil</b-dropdown-item>
		  <b-dropdown-item href="#">Minha Loja</b-dropdown-item>
          <b-dropdown-item href="#">Sair</b-dropdown-item>
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
	methods: {},
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
