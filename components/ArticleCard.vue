<template>
  <b-col class="col-md-6 col-lg-4">
    <b-card v-if="article && article.link" class="mt-2 mw-25 rounded-card h-100">
      <p class="text-left">
        <b-link class="ml-2" :href="article.link">{{
          article && article.link.split("//").pop().split("/")[0]
        }}</b-link>
        <!-- <b-card-img-lazy
          :src="article && article.parsedImage"
          class="rounded"
        /> -->
        <b-card-img-lazy blank-src="/mesmer.gif" :src="
          article.parsedImage ||
          (article.enclosure && article.enclosure.url) ||
          `/brands/${article.link
            .replace('www.', '')
            .replace('news.', '')
            .split('//')[1]
            .split('/')[0]
            .split('.')[0]
          }.svg`
        " class="rounded" />
        <br />
        <i>{{
          new Date(article.pubDate).toLocaleDateString("en-EN", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })
        }}</i>
        <br />
        <i>{{ article.creator }}</i>
      </p>
      <b-link :to="'/news/' + article._id">
        <h4 class="text-left font-weight-bolder">
          {{ article.title }}
        </h4>
      </b-link>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "ArticleCard",
  props: ["article"],
};
</script>

<style >
.rounded-card {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0 !important;
}
</style>