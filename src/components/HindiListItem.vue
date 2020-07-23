<template>
  <div class="hindi-card content-hindi mx-auto rounded-lg shadow-lg">
    <div class="hindi-card__content flex justify-left items-left p-0 m-0">
      <div class="hindi-card__subtitle rounded font-light" v-html="hindi.class"></div>
    </div>
    <div class="text-lg font-bold" v-html="hindi.title"></div>
    <div class="font-light text-right text-sm" v-html="hindi.author"></div>
    <g-link v-if="hindi.path" class="hindi-card__link" :to="hindi.path">hindi</g-link>
  </div>
  <!-- <div class="hindi-card content-box">
    <div class="hindi-card__content">
      <h4 class="hindi-card__title" v-html="hindi.title" />
      <span
        v-if="hindi.category"
        class="hindi-card__subtitle"
        v-html="hindi.category"
      />
      <br />
      <span
        v-if="hindi.author"
        class="hindi-card__subtitle"
        v-html="hindi.author"
      />
      <g-link v-if="hindi.path" class="hindi-card__link" :to="hindi.path"
        >hindi</g-link
      >
    </div>
  </div>-->
</template>

<script>
export default {
  props: ["hindi"],
};
</script>

<style lang="scss">
.content-hindi {
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

.hindi-card {
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
