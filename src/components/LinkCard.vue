<template>
  <div class="link-card content-box">
    <div class="link-card__content">
      <div v-if="link.number" v-html="link.number" />
      <h4 class="link-card__title" v-html="link.title" />
      <div
        v-if="link.subtitle"
        class="link-card__subtitle"
        v-html="link.subtitle"
      />
      <g-link v-if="link.path" class="link-card__link" :to="link.path"
        >Link</g-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["link"],
};
</script>

<style lang="scss">
.link-card {
  margin-bottom: var(--space);
  position: relative;
  margin: 0 auto;
  width: 100%;

  &__title {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    $breakpoint-tablet: 768px;
    @media (min-width: $breakpoint-tablet) {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  &__subtitle {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    $breakpoint-tablet: 768px;
    @media (min-width: $breakpoint-tablet) {
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
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
