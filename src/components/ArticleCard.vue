<template>
  <div class="article-card content-box">
    <div class="article-card__header">
      <g-image
        alt="Cover image"
        v-if="article.cover_image"
        class="article-card__image"
        :src="article.cover_image"
      />
    </div>
    <div class="article-card__content">
      <h4 class="article-card__title" v-html="article.title" />
      <ArticleMeta
        v-if="!article.desk"
        class="article-card__meta"
        :article="article"
      />
      <g-link class="article-card__link" :to="article.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import ArticleMeta from "~/components/ArticleMeta";

export default {
  components: {
    ArticleMeta,
  },
  props: ["article"],
};
</script>

<style lang="scss">
.article-card {
  margin-bottom: var(--space);
  position: relative;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: -0.35rem;
    margin-bottom: -0.1rem;
    $breakpoint-tablet: 768px;
    @media (min-width: $breakpoint-tablet) {
      margin-top: -1.25rem;
      margin-bottom: -0.5rem;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
