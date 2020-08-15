<template>
  <nav id="nav">
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">STV</router-link>
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
      portfolios: store.portfolios
    };
  }
};
</script>

<style>
</style>