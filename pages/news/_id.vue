<template>
  <section class="m-4 content">
    <Article v-if="articleData" :article="articleData" />
  </section>
</template>

<script>
import Article from "~/components/Article";

export default {
  name: "ArticleDetailPage",
  components: {
    Article,
  },
  data() {
    return {
      articleData: { title: "Loading" },
    };
  },

  async asyncData({ app, params }) {
    app.articleData = await app.$axios
      .$get("/api/post", {
        params: { id: params.id },
      })
      .catch((err) => console.log(err));
    // console.log("params:", params);
    return { articleData: app.articleData };
  },
};
</script>

<style>
.article-post {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.4;
  /* white-space: pre-line; */
  /* text-indent: 1em; */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

h2 {
  margin-top: 3rem;
  font-weight: bold;
  text-indent: 0;
  text-align: left;
}

h3 {
  margin-top: 2rem;
  font-weight: bold;
  text-indent: 0;
  text-align: left;
}

strong {
  font-weight: bold;
}

.card-noborder {
  border: none !important;
}

img {
  max-width: 100%;
  height: auto;
}

blockquote {
  font-style: italic;
  margin: 5%;
}

figure img,
b img,
span img,
p img {
  width: 75%;
  border-radius: 1rem !important;
}

iframe {
  width: 90% !important;
  height: auto !important;
}</style>