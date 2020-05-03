<template>
  <div class="container col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-5">
    <form-wizard
      @on-complete="save"
      shape="circle"
      color="#20a0ff"
      error-color="#ff4949"
      title="Cadastro do Estabelecimento"
      subtitle=""
    >
      <!-- Tab1 estabelecimento -->
      <tab-content title="Estabelecimento" icon="ti-shopping-cart">
        <b-card>
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
            >
            </b-form-select>
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

            <b-form-group label="Permirte Retirada?" class="col-md-6">
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

            <b-form-group label="Método de pagamento" class="col-md-12">
              <b-form-radio-group
                id="btn-radios-3"
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
      </tab-content>
      <!-- Tab2 endereço -->
      <tab-content title="Endereço" icon="ti-location-pin">
        <b-card>
          <div class="row">
            <div class="row col-md-12">
              <b-form-group
                class="col-md-6"
                id="fieldset-4"
                label="cep"
                label-for="input-4"
              >
                <b-form-input
                  id="input-4"
                  v-model="estabelecimento.endereco.cep"
                />
              </b-form-group>
            </div>
            <b-form-group
              class="col-md-10"
              id="fieldset-5"
              label="Logradouro"
              label-for="input-5"
            >
              <b-form-input
                id="input-5"
                v-model="estabelecimento.endereco.rua"
              />
            </b-form-group>
            <b-form-group
              class="col-md-2"
              id="fieldset-6"
              label="Número"
              label-for="input-6"
            >
              <b-form-input
                id="input-6"
                v-model="estabelecimento.endereco.numero"
              />
            </b-form-group>
          </div>
          <div class="row">
            <b-form-group
              class="col-md-6"
              id="fieldset-7"
              label="Estado"
              label-for="input-7"
            >
              <b-form-input
                id="input-7"
                v-model="estabelecimento.endereco.estado"
              />
            </b-form-group>
            <b-form-group
              class="col-md-6"
              id="fieldset-8"
              label="Cidade"
              label-for="input-8"
            >
              <b-form-input
                id="input-8"
                v-model="estabelecimento.endereco.cidade"
              />
            </b-form-group>
          </div>
          <div class="row">
            <b-form-group
              class="col-md-12"
              id="fieldset-9"
              label="Complemento"
              label-for="input-9"
            >
              <b-form-input
                id="input-9"
                v-model="estabelecimento.endereco.cidade"
              />
            </b-form-group>
          </div>
        </b-card>
      </tab-content>
      <!-- Tab3 contatos -->
      <tab-content title="Contatos" icon="ti-headphone-alt">
        <b-card>
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
                <div
                  class="d-flex justify-content-center align-items-center ml-1"
                  style="background: #e9ecef; padding: 5px; border: 0.5px solid #ced4da; border-radius: 0.25rem; height: 40px;"
                >
                  <b-form-checkbox
                    v-model="estabelecimento.telefones[index].is_whatsapp"
                    class="ml-2 align-self-start"
                    switch
                  >
                    <unicon
                      name="whatsapp"
                      :fill="
                        estabelecimento.telefones[index].is_whatsapp
                          ? 'green'
                          : '#6c757d66'
                      "
                    />
                  </b-form-checkbox>
                </div>
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
            >
              Adicionar Telefone
            </b-button>
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
        </b-card>
      </tab-content>
      <b-button size="md" variant="primary" slot="prev">
        Voltar
      </b-button>
      <b-button size="md" variant="primary" slot="next">
        Avançar
      </b-button>
      <b-button size="md" variant="primary" slot="finish">
        Salvar
      </b-button>
    </form-wizard>
  </div>
</template>

<script>
export default {
	data () {
		return {
			estabelecimento: {
				endereco: {},
				telefones: [
					{
						numero: '',
						is_whatsapp: false
					}
				]
			},
			form: {
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
	methods: {
		save () {
			console.log(`Save ${this.estabelecimento}`)
		},

		removerTelefone (index) {
			this.estabelecimento.telefones.splice(index, 1)
		},

		adicionarTelefone () {
			if (this.estabelecimento.telefones.length <= 2)
				this.estabelecimento.telefones.push({ numero: '', is_whatsapp: false })
		},

		validateFirstStep () {
			return new Promise(resolve => {
				this.$refs.ruleForm.validate(valid => {
					resolve(valid)
				})
			})
		}
	}
}
</script>
