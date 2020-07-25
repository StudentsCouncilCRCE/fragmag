<template>
  <div class="item-card">
    <g-image
      alt="Cover image"
      v-if="item.image"
      class="item-card__image"
      :src="item.image"
    />
    <div class="item-card__layer"></div>
    <h4 class="item-card__title" v-html="item.title" />
  </div>
</template>

<script>
export default {
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

  &__title {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
