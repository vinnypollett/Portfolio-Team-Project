<template>
  <div class="portfolio">
    <h1>{{portfolio.name}}</h1>
    <div></div>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      portfolioSlug: this.$route.params.slug
    };
  },
  computed: {
    portfolio() {
      return store.portfolios.find(
        portfolio => portfolio.slug === this.portfolioSlug
      );
    }
  }
};
</script>

<style>
</style>