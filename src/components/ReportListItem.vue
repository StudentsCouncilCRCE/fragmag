<template>
  <div class="report-card content-box">
    <div class="report-card__content">
      <h4 class="report-card__title" v-html="report.title" />
      <span v-if="report.category" class="report-card__subtitle" v-html="report.category" />
      <br />
      <span v-if="report.author" class="report-card__subtitle" v-html="report.author" />
      <g-link v-if="report.path" class="report-card__link" :to="report.path">report</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["report"]
};
</script>

<style lang="scss">
.report-card {
  margin-bottom: var(--space);
  position: relative;

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
