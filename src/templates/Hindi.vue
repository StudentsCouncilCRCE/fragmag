<template>
  <Layout>
    <div class="hindi-title">
      <h1 class="hindi-title__text">{{ $page.hindi.title }}</h1>
    </div>
    <div class="hindi content-box"></div>
    <div class="hindi__content" v-html="$page.hindi.content" />
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.hindi.title,
    };
  },
};
</script>

<page-query>
query hindi ($id: ID!) {
  hindi: hindi (id: $id) {
    title
    class
    path
    content

  }
}
</page-query>

<style lang="scss">
.hindi-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.hindi {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    text-align: center;

    img {
      width: 100%;
      max-height: 25rem;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    text-align: justify;
    font-family: "Noto Sans", sans-serif !important;
    font-size: 1.1rem;

    img {
      width: 100%;
      max-height: 20rem;
    }

    h2 {
      margin-top: 0;
    }

    p {
      color: var(--title-color);
    }
  }
}
</style>
