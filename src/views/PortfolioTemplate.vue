<template>
  <div>
    <section class="portfolio">
      <h1>{{portfolio.name}}</h1>
    </section>
    <section>
      <div class="cards">
        <div v-for="project in portfolio.projects" :key="project.slug" class="card">
          <router-link
            :to="{
              name: `ProjectTemplate`,
              params:{projectSlug: project.slug}
          }"
          >
            <p>{{project.name}}</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    portfolio() {
      return store.portfolios.find(portfolio => portfolio.slug === this.slug);
    }
  }
};
</script>

<style scoped>
.card {
  height: 100px;
  width: 100px;
  margin: 10px;
  background-color: aquamarine;
  cursor: pointer;
}
</style>

