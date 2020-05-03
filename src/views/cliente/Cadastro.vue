<template>
  <div class="container col-xl-4 col-lg-4 col-md-6 col-sm-12 my-5">
    <b-card title="Cadastro">
      <b-form class>
        <b-form-group
          class="col-md-12"
          id="fieldset-1"
          label="Nome"
          label-for="input-1"
        >
          <b-form-input id="input-1" v-model="user.nome" />
        </b-form-group>

        <b-form-group
          class="col-md-12"
          id="fieldset-2"
          label="Sobrenome"
          label-for="input-2"
        >
          <b-form-input id="input-2" v-model="user.sobrenome" />
        </b-form-group>

        <b-form-group
          class="col-md-12"
          id="fieldset-3"
          label="Email"
          label-for="input-3"
        >
          <b-form-input id="input-3" v-model="user.email" />
        </b-form-group>
        <b-form-group
          class="col-md-12"
          id="fieldset-4"
          label="Senha"
          label-for="input-4"
        >
          <b-form-input id="input-4" v-model="user.senha" type="password" />
        </b-form-group>
        <div class="d-flex justify-content-end p-2">
          <b-button class variant="primary" @click="register">
            Registrar
          </b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
	data () {
		return {
			user: {},
			form: {
				tiposPerfis: [
					{ text: 'Cliente', value: 'CLIENT' },
					{ text: 'Vendedor', value: 'VENDOR' }
				]
			}
		}
	},

	methods: {
		register () {
			console.log('register', this.user)
		}
	}
}
</script>
