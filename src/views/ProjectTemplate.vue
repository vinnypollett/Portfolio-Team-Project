<template>
  <div>
    <section>
      <h1>{{portfolio.name}}'s project</h1>
      <h1>{{projectSlug}}</h1>
      <!-- <h3>{{project.detail}}</h3> -->
    </section>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  props: {
    slug: {
      type: String,
      required: true
    },
    projectSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    portfolio() {
      return store.portfolios.find(portfolio => portfolio.slug === this.slug);
    },
    project() {
      return this.portfolios.projects.find(
        project => project.slug === this.projectSlug
      );
    }
  }
};
</script>

<style>
</style>