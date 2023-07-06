<template>
  <b-container fluid>
    <b-row class="align-self-stretch">
      <b-card-group deck class="content">
        <ArticleCard
          v-for="article in news"
          :key="article._id"
          :article="article"
        />
      </b-card-group>
    </b-row>
    <!-- <b-modal ref="readArticle" size="xl">
      {{ modalText }}
    </b-modal> -->
    <div v-if="news && news.length" class="mt-5 mb-5 text-center">
      <b-button
        class="mr-1 rounded"
        :variant="
          $colorMode.preference === 'dark'
            ? 'outline-success'
            : $colorMode.preference === 'light'
            ? 'outline-primary'
            : 'outline-primary'
        "
        to="/articles/page/1"
        >1</b-button
      >
      <b-button
        class="mr-1 rounded"
        :variant="
          $colorMode.preference === 'dark'
            ? 'outline-success'
            : $colorMode.preference === 'light'
            ? 'outline-primary'
            : 'outline-primary'
        "
        :to="
          routePage - 1 <= 0
            ? '/articles/page/1'
            : '/articles/page/' + (routePage - 1)
        "
        >Prev</b-button
      >
      <b-button
        class="mr-1 rounded"
        :variant="
          $colorMode.preference === 'dark'
            ? 'success'
            : $colorMode.preference === 'light'
            ? 'primary'
            : 'primary'
        "
        disabled
        >{{ routePage }}</b-button
      >
      <b-button
        class="rounded"
        :variant="
          $colorMode.preference === 'dark'
            ? 'outline-success'
            : $colorMode.preference === 'light'
            ? 'outline-primary'
            : 'outline-primary'
        "
        v-if="news && news.length === 15"
        :to="'/articles/page/' + (routePage + 1)"
        >Next</b-button
      >
    </div>
    <div class="w-100 center" v-if="!news || !news.length">
      <b-spinner />
      <h4><blockquote class="w-100">"Best news - no news"</blockquote></h4>
    </div>
  </b-container>
</template>

<script>
import ArticleCard from "~/components/ArticleCard";

export default {
  components: {
    ArticleCard,
  },
  data() {
    return {
      //currentPage: 1,
      perPage: 15,
      modalText: "",
      search: "",
    };
  },

  computed: {
    routePage: function () {
      return Number(this.$route.params.page);
    },
  },
  watch: {
    async $route() {
      console.log("reloading");
      await this.$nuxt.refresh();
    },
  },
  methods: {
    hostname(url) {
      // run against regex
      if (url) {
        const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
        // extract hostname (will be null if no match is found)
        return matches && matches[1];
      }
    },
  },

  async asyncData({ app, params, route }) {
    // console.log("loading news", route);
    let newsData = await app.$axios
      .$get("/api/news", {
        params: {
          search: route.query.search,
          count: app.perPage,
          page: params.page,
        },
      })
      .catch((err) => console.log(err));
    // console.log(newsData);
    return { news: newsData };
  },
};
</script>

<style>
@media (max-width: 1000px) {
  .card-columns {
    column-count: 2 !important;
  }
}
@media (max-width: 600px) {
  .card-columns {
    column-count: 1 !important;
  }
}
.card {
  background-color: inherit !important;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}
</style>
