<template>
  <Layout>
    <div class="desk-title">
      <h1 class="desk-title__text">
        {{ $page.desk.title }}
      </h1>
    </div>
    <div class="desk content-box">
      <div class="desk__header">
        <g-image
          alt="Desk Image"
          v-if="$page.desk.cover_image"
          :src="$page.desk.cover_image"
        />
      </div>
      <div
        class="desk__content"
        :class="$page.desk.devnagri && hindifont"
        v-html="$page.desk.content"
      />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.desk.title,
    };
  },
};
</script>

<page-query>
query Desk ($id: ID!) {
  desk: desk (id: $id) {
    title
    path
    devnagri
    content
    cover_image (blur: 10)
  }
}
</page-query>

<style lang="scss">
.desk-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.desk {
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
