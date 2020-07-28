<template>
  <div class="article-meta">
    <template
      v-if="
        (article.timeToRead && article.section == 'english') ||
          article.section == 'technical'
      "
    >
      <strong>{{ article.timeToRead }} min read</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ["article"],
};
</script>

<style lang="scss">
.article-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
