<template>
  <nav id="nav">
    <router-link to="/">STV</router-link>
    <ul class="nav-links">
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

<style scope>
nav {
  display: flex;
  justify-content: space-between;
}
ul {
  width: 500px;
  display: flex;
  justify-content: space-between;
}
</style>