<script>
import {NewsApiService} from "./news/services/news-api.service.js";
import {Article} from "./news/model/article.entity.js";
import SideMenu from "./news/components/side-menu.component.vue";
import ArticleList from "./news/components/article-list.component.vue";
import UnavaliableContent from "./news/components/unavaliable-content.component.vue";

export default {
  name: "App",
  components: {UnavaliableContent, ArticleList, SideMenu},
  data() {
    return {
      sidebarVisible: false,
      articles: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created() {
    // Get Articles for default source
    this.getArticlesForSource('bbc-news');
  },
  methods: {
    // build article list from response data
    buildArticleListFromResponseData(articles) {
      return articles.map(article => new Article(article.title, article.description, article.url, article.urlToImage, article.source))
    },
    // fetch articles for selected source
    getArticlesForSource(sourceId) {
        this.newsApi.getArticlesForSource(sourceId)
            .then(response => {
              let articles = response.data.articles;
              this.articles = this.buildArticleListFromResponseData(articles);
              console.log(response.data.articles);
            }).catch(e => this.errors.push(e));
    },
    // Fetch articles for selected Source with logo URL
    getArticlesForSourceWithLogo(source) {
      this.newsApi.getArticlesForSource(source.id)
          .then(response => {
            let articles = response.data.articles;
            this.articles = this.buildArticleListFromResponseData(articles);
            this.articles.forEach(article => article.source.urlToLogo = source.urlToLogo);
            console.log(response.data.articles);
          }).catch(e => this.errors.push(e));
    },

    // Toggle Sidebar
    toggleSideBar() {
      this.sidebarVisible = !this.sidebarVisible;
    },

    // Source selected Event Handler
    setSource(source) {
      this.getArticlesForSourceWithLogo(source);
      this.toggleSideBar();
    }
  }
}
</script>

<template>
  <div class="w-full">
    <div>
      <pv-menubar class="sticky bg-primary">
        <template #start>
          <pv-button icon="pi pi-bars" label="CatchUp" text @click="toggleSideBar"/>
          <side-menu v-model:visible="sidebarVisible" v-on:source-selected="setSource"/>
        </template>
      </pv-menubar>
    </div>
  </div>
  <div>
    <article-list v-if="errors" :articles="articles"/>
    <unavaliable-content v-else :errors="errors"/>
  </div>
</template>