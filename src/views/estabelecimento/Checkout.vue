<template>
	<section>
		<div class="container">
			<div class="py-5 text-center">
				<h2>Checar Pedido</h2>
			</div>

			<div class="row">
				<div class="col-md-8 order-md-1">
					<div class="my-3 p-3 bg-white rounded box-shadow">
						<h6 class="border-bottom border-gray pb-2 mb-0">
							Produtos Selecionados
						</h6>
						<div class="media text-muted pt-3">
							<img
								data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
								alt=""
								class="mr-2 rounded"
							/>
							<p
								class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"
							>
								<strong class="d-block text-gray-dark"
									>1 - Pizza Calabresa - R$ 27,99</strong
								>
								Tamanho G
							</p>
						</div>
						<div class="media text-muted pt-3">
							<img
								data-src="holder.js/32x32?theme=thumb&bg=e83e8c&fg=e83e8c&size=1"
								alt=""
								class="mr-2 rounded"
							/>
							<p
								class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"
							>
								<strong class="d-block text-gray-dark"
									>1 - Pizza Mista - R$ 19,99</strong
								>
								Tamanho M
							</p>
						</div>
						<div class="media text-muted pt-3">
							<img
								data-src="holder.js/32x32?theme=thumb&bg=6f42c1&fg=6f42c1&size=1"
								alt=""
								class="mr-2 rounded"
							/>
							<p
								class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray"
							>
								<strong class="d-block text-gray-dark"
									>1 - Pizza Frango com Catupiry - R$ 24,99</strong
								>
								Tamanho G
							</p>
						</div>
						<div class="col-md-12 pt-2">
							<p>Observações:</p>
							<p class="pt-2 pb-2 img-thumbnail col-12">
								Por favor, mandar ketchup e maionese; Não adicionar Cebola na
								pizza de frango com Catupiry. Adicionar borda na pizza mista
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-4 order-md-2 mb-4">
					<h4 class="d-flex justify-content-between align-items-center mb-3">
						<span class="text-muted">Seu Carrinho</span>
						<span class="badge badge-secondary badge-pill">3</span>
					</h4>
					<ul class="list-group mb-3">
						<li
							class="list-group-item d-flex justify-content-between lh-condensed"
						>
							<div>
								<h6 class="my-0">Pizza Calabresa</h6>
								<small class="text-muted">Tamanho G</small>
							</div>
							<span class="text-muted">R$ 27,99</span>
						</li>
						<li
							class="list-group-item d-flex justify-content-between lh-condensed"
						>
							<div>
								<h6 class="my-0">Pizza Mista</h6>
								<small class="text-muted">Tamanho M</small>
							</div>
							<span class="text-muted">R$ 19,99</span>
						</li>
						<li
							class="list-group-item d-flex justify-content-between lh-condensed"
						>
							<div>
								<h6 class="my-0">Pizza Frango com Catupiry</h6>
								<small class="text-muted">Tamanho G</small>
							</div>
							<span class="text-muted">R$ 24,99</span>
						</li>
						<li class="list-group-item d-flex justify-content-between bg-light">
							<div class="text-success">
								<h6 class="my-0">Codigo Promocional</h6>
								<small>XE6B31HF4</small>
							</div>
							<span class="text-success">FRETE GRÁTIS</span>
						</li>
						<li class="list-group-item d-flex justify-content-between">
							<span>Total (R$)</span>
							<strong>R$ 72,97</strong>
						</li>
					</ul>

					<div class="input-group">
						<input
							type="text"
							class="form-control"
							placeholder="Código Promocional"
							disabled
						/>
						<div class="input-group-append">
							<button type="submit" class="btn btn-secondary" disabled>
								Ativar
							</button>
						</div>
					</div>
					<div class="pt-2" lg="4">
						<button
							class="btn btn-primary btn-block"
							id="show-btn"
							@click="$bvModal.show('bv-modal-example')"
						>
							Concluir Pedido
						</button>
						<button
							class="btn btn-outline-secondary btn-block"
							@click="$router.push('/estabelecimento')"
						>
							Cancelar Pedido
						</button>
					</div>
					<b-modal id="bv-modal-example" hide-footer>
						<template v-slot:modal-title>
							Confirmação de Pedido
						</template>
						<div class="d-block text-center">
							<h3 class="my-4">Muito Obrigado pelo seu Pedido!</h3>
							<p class="my-4">
								Nossa Cozinha irá prepará-lo em breve. Leva em média 30min,
								segura a fome que vai valer a pena!
							</p>
						</div>
						<b-button class="mt-3" block @click="$router.push('/')"
							>Concluir</b-button
						>
					</b-modal>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style></style>
