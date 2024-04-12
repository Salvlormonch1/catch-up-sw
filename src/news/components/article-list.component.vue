<script>
import ArticleCard from "./article-card.component.vue";

export default {
  name: "article-list",
  components: {ArticleCard},
  props: { articles: Array }
}
</script>

<template>
  <div v-for="article in articles">
    <article-card :article="article"/>
  </div>
</template>