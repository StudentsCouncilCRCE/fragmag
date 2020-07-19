<template>
  <div class="item-card">
    <g-image
      alt="Cover image"
      v-if="item.cover_image"
      class="item-card__image"
      :src="item.cover_image"
    />
    <div class="item-card__layer"></div>
    <h4 class="item-card__title" v-html="item.title" />
    <g-link class="item-card__link" :to="item.path">Link</g-link>
  </div>
</template>

<script>
import ArticleMeta from "~/components/ArticleMeta";

export default {
  components: {
    ArticleMeta,
  },
  props: ["item"],
};
</script>

<style lang="scss">
.item-card {
  margin-bottom: calc(var(--space) - 10px);
  position: relative;
  text-align: center;
  border-radius: var(--radius);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02),
    1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.6s;

  &__image {
    min-width: 100%;
    border-radius: var(--radius);
  }

  &__layer {
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
