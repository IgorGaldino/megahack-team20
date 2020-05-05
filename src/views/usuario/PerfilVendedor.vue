<template>
  <section>
    <div class="container mb-3">
      <div class="row">
        <div class="col-lg-3">
          <img :src="store.avatar" class="col-md-12 mt-4 rounded-circle" />
          <h3 class="my-4">{{ store.nome }}</h3>
          <ul class="list-group">
            <li
              v-for="(item, index) in form.categorias"
              :key="index"
              type="button"
              :class="'list-group-item list-group-item-action d-flex justify-content-between align-items-center ' + item.class"
            >
              {{ item.label }}
            </li>
          </ul>
        </div>
        <!-- /.col-lg-3 -->

        <div class="col-lg-9">
          <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img class="d-block img-fluid" :src="store.banner" alt="First slide" />
              </div>
            </div>
          </div>

          <div class="col-lg-12 px-0">
            <!--estabelecimento -->
            <b-card title="Dados cadastrais">
              <p class="mt-4 title-form text-black-50">Informações do estabelecimento</p>
              <hr />
              <b-form-group
                class="col-md-12"
                id="fieldset-1"
                label="Nome do Estabelecimento"
                label-for="input-1"
              >
                <b-form-input id="input-1" v-model="estabelecimento.nome" />
              </b-form-group>

              <b-form-group
                class="col-md-12"
                id="fieldset-2"
                label="Tipo de estabelecimento"
                label-for="input-2"
              >
                <b-form-select
                  id="input-2"
                  v-model="estabelecimento.tipo"
                  :options="form.listTipos"
                ></b-form-select>
              </b-form-group>
              <div class="row col-md-12">
                <b-form-group label="Delivery?" class="col-md-6">
                  <b-form-radio-group
                    id="btn-radios-1"
                    v-model="estabelecimento.delivery"
                    :options="form.boolean"
                    button-variant="outline-primary"
                    size="sm"
                    name="radios-btn-default"
                    buttons
                  />
                </b-form-group>

                <b-form-group label="Permite Retirada?" class="col-md-6">
                  <b-form-radio-group
                    id="btn-radios-2"
                    v-model="estabelecimento.retirada"
                    :options="form.boolean"
                    button-variant="outline-primary"
                    size="sm"
                    name="radios-btn-default"
                    buttons
                  />
                </b-form-group>

                <b-form-group label="Forma de pagamento" class="col-md-12">
                  <b-form-checkbox-group
                    id="btn-checkbox-1"
                    v-model="estabelecimento.metodoPagamento"
                    :options="form.metodoPagamento"
                    button-variant="outline-primary"
                    size="md"
                    name="radios-btn-default"
                    buttons
                  />
                </b-form-group>
                <b-form-group label="Descrição" class="col-md-12">
                  <b-form-textarea
                    id="textarea"
                    v-model="estabelecimento.descricao"
                    placeholder
                    rows="3"
                    max-rows="6"
                  />
                </b-form-group>
              </div>
              <b-form-group label="Insira uma imagem para seu estabelecimento" class="col-md-12">
                <div class="custom-file">
                  <input type="file" class="custom-file-input" id="customFileLang" lang="pt" />
                  <label class="custom-file-label" for="customFileLang">Selecione o arquivo</label>
                </div>
              </b-form-group>

              <!-- endereço -->
              <p class="mt-4 title-form text-black-50">Informações do endereço</p>
              <hr />

              <b-form-group class="col-md-6" id="fieldset-4" label="cep" label-for="input-4">
                <b-form-input
                  id="input-4"
                  v-mask="'######-###'"
                  v-model="estabelecimento.endereco.cep"
                />
              </b-form-group>
                <b-row class="col-md-12">
                  <b-form-group
                    class="col-md-10"
                    id="fieldset-5"
                    label="Logradouro"
                    label-for="input-5"
                  >
                    <b-form-input id="input-5" v-model="estabelecimento.endereco.rua" />
                  </b-form-group>
                  <b-form-group class="col-md-2" id="fieldset-6" label="Número" label-for="input-6">
                    <b-form-input id="input-6" v-model="estabelecimento.endereco.numero" />
                  </b-form-group>
                </b-row>

              <b-row class="col-md-12">
                <b-form-group class="col-md-6" id="fieldset-7" label="Estado" label-for="input-7">
                  <b-form-input id="input-7" v-model="estabelecimento.endereco.estado" />
                </b-form-group>
                <b-form-group class="col-md-6" id="fieldset-8" label="Cidade" label-for="input-8">
                  <b-form-input id="input-8" v-model="estabelecimento.endereco.cidade" />
                </b-form-group>
              </b-row>
              <b-row class="col-md-12">
                <b-form-group
                  class="col-md-12"
                  id="fieldset-9"
                  label="Complemento"
                  label-for="input-9"
                >
                  <b-form-input id="input-9" v-model="estabelecimento.endereco.complemento" />
                </b-form-group>
              </b-row>

              <!-- contatos -->
              <p class="mt-4 title-form text-black-50">Informações de Contato</p>
              <hr />
              <!-- Fone -->
              <b-form-group
                id="input-group-4"
                label="Telefone(s) para contato "
                label-for="input-4"
                class="col-md-6 col-sm-12 col-xs-12"
              >
                <b-row
                  class="d-flex justify-content-between"
                  v-for="(item, index) in estabelecimento.telefones"
                  :key="index"
                >
                  <b-col cols="12" class="mb-3 d-flex">
                    <b-form-input
                      :id="`telefone-${index + 1}`"
                      v-model="estabelecimento.telefones[index].numero"
                      v-mask="['(##) ####-####', '(##) #####-####']"
                      placeholder="(99) 99999-9999"
                    ></b-form-input>
                    <b-button
                      class="ml-1"
                      variant="outline-secondary"
                      @click="removerTelefone(index)"
                      v-show="
                            !(index === 0 && estabelecimento.telefones.length === 1)
                          "
                      style="height: 40px;"
                    >
                      <b-icon-trash />
                    </b-button>
                  </b-col>
                </b-row>
                <b-button
                  variant="info"
                  block
                  @click="adicionarTelefone"
                  v-show="estabelecimento.telefones.length < 3"
                >Adicionar Telefone</b-button>
              </b-form-group>
              <!-- End fone -->
              <b-form-group
                class="col-md-12"
                id="fieldset-10"
                label="Facebook"
                label-for="input-10"
              >
                <b-form-input id="input-10" v-model="estabelecimento.facebook" />
              </b-form-group>
              <b-form-group
                class="col-md-12"
                id="fieldset-11"
                label="Instagram"
                label-for="input-11"
              >
                <b-form-input id="input-11" v-model="estabelecimento.instagram" />
              </b-form-group>
              <div class="d-flex justify-content-end">
                <b-button variant="primary" @click="save">Salvar</b-button>
              </div>
            </b-card>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.col-lg-9 -->
      </div>
      <!-- /.row -->
    </div>
  </section>
</template>

<script>
import obj from '@/shared/object'
export default {
	data () {
		return {
			estabelecimento: {
				nome: 'Pizzaria 2 Irmãos',
				tipo: 'ALIMENTACAO',
				delivery: true,
				retirada: false,
				metodoPagamento: ['C_DEBITO', 'C_CREDITO'],
				endereco: {
					cep: '60521045',
					rua: 'Rua Joaquim Manuel de Macêdo',
					numero: 186,
					estado: 'Ceará',
					cidade: 'Fortaleza'
				},
				telefones: [
					{ numero: '(85) 2860-1237', is_whatsapp: false },
					{ numero: '(85) 98940-5380', is_whatsapp: false }
				]
			},
			store: {},
			form: {
				categorias: [
					{ label: 'Dados cadastrais', class: 'active' },
					{ label: 'Gerenciar lojas' },
					{ label: 'Apagar conta' }
				],
				metodoPagamento: [
					{ text: 'Dinheiro', value: 'DINHEIRO' },
					{ text: 'Cartão de Crédito', value: 'C_CREDITO' },
					{ text: 'Cartão de Débito', value: 'C_DEBITO' }
				],
				boolean: [
					{ text: 'Sim', value: true },
					{ text: 'Não', value: false }
				],
				listTipos: [
					{ text: 'Artesanato', value: 'ARTESANATO' },
					{ text: 'Beleza', value: 'BELEZA' },
					{ text: 'Construção Civil', value: 'CONSTRUCAO_CIVIL' },
					{ text: 'Economia Criativa', value: 'ECONOMIA_CRIATIVA' },
					{ text: 'Eventos', value: 'EVENTOS' },
					{ text: 'Informática e Tecnologia', value: 'INFORMATICA_TECNOLOGIA' },
					{ text: 'Logistica e Transporte', value: 'LOGISTICA_TRANSPORTE' },
					{ text: 'Moda', value: 'MODA' },
					{ text: 'Peças Automotivas', value: 'PECAS_AUTOMOTIVAS' },
					{ text: 'Pet/Veterinaria', value: 'PET_VETERINARIA' },
					{ text: 'Alimentação', value: 'ALIMENTACAO' },
					{ text: 'Saúde', value: 'SAUDE' },
					{ text: 'Educação', value: 'EDUCACAO' },
					{ text: 'Turismo', value: 'TURISMO' },
					{ text: 'Varejo', value: 'VAREJO' },
					{ text: 'Energia', value: 'ENERGIA' },
					{ text: 'Outros', value: 'OUTROS' }
				]
			}
		}
	},
	created () {
		this.store = obj[0]
		// switch (this.$route.params.name) {
		// case 'pizzaria-2-irmaos':
		// 	this.store = obj[0]
		// 	break
		// case 'mercadinho-mix':
		// 	this.store = obj[1]
		// 	break
		// case 'padaria-ferragens':
		// 	this.store = obj[2]
		// 	break
		// }
	},
	methods: {
		removerTelefone (index) {
			this.estabelecimento.telefones.splice(index, 1)
		},

		adicionarTelefone () {
			if (this.estabelecimento.telefones.length <= 2)
				this.estabelecimento.telefones.push({ numero: '', is_whatsapp: false })
		},
		save () {
			console.log(this.estabelecimento)
		}
	}
}
</script>

<style>
.custom-file-input:lang(pt) ~ .custom-file-label::after {
  content: "Procurar";
}
</style>
