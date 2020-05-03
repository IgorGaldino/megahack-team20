<template>
	<section>
		<h3 class="mt-3 ml-3">Cadastro de produto</h3>
		<div class="mt-5 container col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-5">
			<b-card>
				<b-form-group
					class="col-md-12"
					id="fieldset-1"
					label="Nome do Produto"
					label-for="input-1"
				>
					<b-form-input id="input-1" />
				</b-form-group>
				<b-row class="col-md-12">
					<b-form-group
						class="col-md-6"
						id="fieldset-2"
						label="Categoria"
						label-for="input-2"
					>
						<b-form-select :options="categorias" id="input-2"> </b-form-select>
					</b-form-group>

					<b-form-group label="Valor do produto" class="col-md-6">
						<money class="form-control" laceholder="Valor" />
						<!-- <b-form-input id="input-1" v-mask="'R$##,##'" /> -->
					</b-form-group>
				</b-row>
				<div class="row col-md-12">
					<b-form-group label="Descrição" class="col-md-12">
						<b-form-textarea
							id="textarea"
							placeholder=""
							rows="3"
							max-rows="6"
						/>
					</b-form-group>
				</div>
				<div class="custom-file col-md-12">
					<div class="custom-file">
						<input
							type="file"
							class="custom-file-input"
							id="customFileLang"
							lang="pt"
						/>
						<label class="custom-file-label" for="customFileLang">
							Selecionar arquivo
						</label>
					</div>
				</div>
			</b-card>
			<div class="row d-flex justify-content-end">
				<div class="d-flex justify-content-end col-md-6">
					<b-button
						@click="$router.push('/estabelecimento')"
						class="mt-3"
						variant="primary"
						slot="finish"
					>
						Salvar
					</b-button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			categorias: [
				"Pizza",
				"Hamburguer",
				"Salgados",
				"Bebidas Quentes",
				"Bebidas Geladas"
			]
		};
	}
};
</script>

<style></style>
