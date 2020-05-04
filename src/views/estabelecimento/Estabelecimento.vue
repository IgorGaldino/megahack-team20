<template>
	<section>
		<div class="container">
			<div class="row">
				<div class="col-lg-3">
					<img :src="store.avatar" class="col-md-12 mt-4 rounded-circle" />
					<h3 class="my-4">{{ store.nome }}</h3>
					<ul class="list-group">
						<li
							v-for="(item, index) in store.categorias"
							:key="index"
							type="button"
							class="list-group-item d-flex justify-content-between align-items-center"
						>
							{{ item.label }}
							<span class="badge badge-primary badge-pill">{{ item.qty }}</span>
						</li>
					</ul>
					<b-button
						@click="$router.push('/checarPedido')"
						variant="primary"
						class="mt-4 col-md-12"
					>
						Finalizar pedido
					</b-button>
				</div>
				<!-- /.col-lg-3 -->

				<div class="col-lg-9">
					<div
						id="carouselExampleIndicators"
						class="carousel slide my-4"
						data-ride="carousel"
					>
						<div class="carousel-inner" role="listbox">
							<div class="carousel-item active">
								<img
									class="d-block img-fluid"
									:src="store.banner"
									alt="First slide"
								/>
							</div>
						</div>
					</div>

					<div class="row">
						<div
							v-for="(item, index) in store.produtos"
							:key="index"
							class="col-lg-4 col-md-6 mb-4"
						>
							<div class="card h-100">
								<a
									><img
										class="card-img-top"
										height="250px"
										width="400px"
										:src="item.img"
										alt=""
								/></a>
								<div class="card-body">
									<h5 class="card-title">
										<a>{{ item.nome }}</a>
									</h5>
									<h5>{{ item.preco }}</h5>
								</div>

								<div class="card-footer">
									<b-row>
										<small class="col-md-6 text-muted"
											>&#9733; &#9733; &#9733; &#9733; &#9734;</small
										>
										<div class="col-md-6 d-flex justify-content-end">
											<b-button v-if="item.isAdd" class="row" variant="danger">
												Remover <i class="ti-trash"></i>
											</b-button>
											<b-button v-else class="row" variant="primary">
												Adicionar <i class="ti-shopping-cart"></i>
											</b-button>
										</div>
									</b-row>
								</div>
							</div>
						</div>
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
import obj from "../../shared/object";
export default {
	data() {
		return {
			store: {}
		};
	},
	created() {
		switch (this.$route.params.name) {
			case "pizzaria-2-irmaos":
				this.store = obj[0];
				break;
			case "mercadinho-mix":
				this.store = obj[1];
				break;
			case "padaria-ferragens":
				this.store = obj[2];
				break;
		}
	}
};
</script>

<style></style>
