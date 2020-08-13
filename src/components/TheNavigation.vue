<template>
  <nav id="nav">
    <p class="logo">SVT</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="portfolio in portfolios" :key="portfolio.name" class="links">
        <router-link
          :to="{
              name: `PortfolioTemplate`,
              params:{slug:portfolio.slug}
          }"
        >{{portfolio.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      portfolioName: this.$route.params.name,
      portfolios: store.portfolios
    };
  }
};
</script>

<style>
</style>