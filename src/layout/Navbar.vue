<template>
	<div>
        <b-button>asd</b-button>
		<b-navbar fixed="top" toggleable="lg" type="dark" variant="primary">
			<router-link to="/">

				<!-- <img src="@/assets/logo.svg" alt="Minha Figura" />
				<img class="fontImage" src="@/assets/font.svg" alt="Minha Figura" /> -->
			</router-link>
			<button
				type="button"
				aria-label="Toggle navigation"
				aria-controls="nav-collapse"
				aria-expanded="false"
				class="navbar-toggler"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item right>
						<div class="d-flex align-items-start">
							<a style="color: #fff; padding-right: 10px; padding-top: 5px;"
								>Sair</a
							>
						</div>
					</b-nav-item>
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
