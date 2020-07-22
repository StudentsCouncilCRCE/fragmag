<template>
  <div class="report-card content-report mx-auto rounded-lg shadow-lg">
    <div class="report-card__content flex justify-left items-left p-0 m-0">
      <div
        class="report-card__subtitle rounded font-light"
        v-html="report.category"
      ></div>
    </div>
    <div class="text-lg font-bold" v-html="report.title"></div>
    <div class="font-light text-right text-sm" v-html="report.author"></div>
    <g-link v-if="report.path" class="report-card__link" :to="report.path"
      >report</g-link
    >
  </div>
  <!-- <div class="report-card content-box">
    <div class="report-card__content">
      <h4 class="report-card__title" v-html="report.title" />
      <span
        v-if="report.category"
        class="report-card__subtitle"
        v-html="report.category"
      />
      <br />
      <span
        v-if="report.author"
        class="report-card__subtitle"
        v-html="report.author"
      />
      <g-link v-if="report.path" class="report-card__link" :to="report.path"
        >report</g-link
      >
    </div>
  </div> -->
</template>

<script>
export default {
  props: ["report"],
};
</script>

<style lang="scss">
.content-report {
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

.report-card {
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
