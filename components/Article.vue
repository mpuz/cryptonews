<template>
  <div>
    <h3 class="text-left font-weight-bolder">
      {{ article && article.title }}
    </h3>
    <img
      class="rounded"
      v-if="
        article &&
        article.parsedImage &&
        !article.parsed.includes(article.parsedImage)
      "
      :src="(article && article.parsedImage) || article.enclosure.url"
      alt="Image"
    />

    <p class="text-justify">
      <i>{{
        new Date(article && article.pubDate).toLocaleDateString("en-EN", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      }}</i>
      <br />
      <i>{{ article && article.creator }}</i>
    </p>
    <div
      v-html="article['content:encoded'] || article.content"
      class="mt-5 article-post text-justify"
    ></div>
    <div class="mt-3 font-weight-bold">
      <p>
        Source
        <a v-if="article.link" :href="article && article.link" target="blank">
          {{ article.link.split("//")[1].split("/")[0] }}</a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  props: ["article"],
};
</script>

<style>
img.size-full,  
img.wp-post-image,
img.size-large,
img.size-medium {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
}
</style>
