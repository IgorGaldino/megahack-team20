<template>
  <div class="container">
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <h1>1111111111111111111111111</h1>
    <section>
      <h2 class="text-center mt-0">{{ titlePage }}</h2>
      <hr class="divider my-4" />
      <div class="page__section__cards">
        <div
          class="page__section__cards__card"
          v-for="card in cards"
          :key="card.icon"
        >
          <b-icon :icon="card.icon" variant="primary" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titlePage: "Quanto Custa?",
      cards: [
        {
          icon: "gem",
          title: "Sem custo de adesão",
          description:
            "Quando custa para se cadastrar e usar? Nada! É totalmente grátis"
        },
        {
          icon: "gem",
          title: "Sem custo por vendas",
          description:
            "Quando vendo ou compro algo, preciso pagar? Não, é totalmente grátis"
        },
        {
          icon: "gem",
          title: "Sem custo de hospedagem",
          description:
            "Depois de quanto tempo pelo serviço online preciso pagar? Não precisa pagar nada, é grátis para sempre"
        },
        {
          icon: "gem",
          title: "Sem limite de acessos",
          description:
            "Possui algum limite de acessos? Não! Quanto mais acessos obtiver, mais visibilidade para você"
        }
      ]
    };
  },

  created() {},
  methods: {}
};
</script>
