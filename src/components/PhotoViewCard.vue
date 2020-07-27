<template>
  <div class="photo-card">
    <g-image
      alt="Cover image"
      v-if="photo.image"
      class="photo-card__image"
      :src="photo.image"
    />
    <h5 class="photo-card__title">{{ photo.name }} - {{ photo.class }}</h5>
  </div>
</template>

<script>
export default {
  props: ["photo"],
};
</script>

<style lang="scss">
.photo-card {
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
    border-radius: var(--radius);
    padding: 0.25rem;
    background-color: rgba(0, 0, 0, 0.7);
    bottom: 1%;
    right: 8px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>
