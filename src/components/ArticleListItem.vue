<template>
  <div class="article-card content-article mx-auto rounded-lg shadow-lg">
    <div class="article-card__content flex justify-left items-left p-0 m-0">
      <div
        class="article-card__subtitle font-light"
        v-html="article.class"
      ></div>
    </div>
    <div class="text-lg font-bold" v-html="article.title"></div>
    <div class="font-light text-right text-sm" v-html="article.author"></div>
    <g-link v-if="article.path" class="article-card__link" :to="article.path"
      >article</g-link
    >
  </div>
</template>

<script>
export default {
  props: ["article"],
};
</script>

<style lang="scss">
.content-article {
  background-color: var(--bg-content-color);
  max-width: var(--content-width);
  margin: 0 auto;
  text-align: center;
  transition: background-color 0.6s;
  padding: 0.75rem;
  border-radius: var(--radius);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02),
    1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.6s;
}

.article-card {
  position: relative;
  width: 100% !important;
  margin: 0.1rem auto !important;

  &__title {
    padding: 0;
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
