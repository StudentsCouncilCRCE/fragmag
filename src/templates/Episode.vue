<template>
  <Layout>
    <div class="episode-title">
      <h1 class="episode-title__text">
        {{ $page.episode.title }}
      </h1>
    </div>
    <div class="episode content-box">
      <div class="episode__header">
        <g-image
          alt="episode Image"
          v-if="$page.episode.cover_image"
          :src="$page.episode.cover_image"
        />
      </div>
      <div
        :class="$page.episode.center && 'centeralign'"
        class="episode__content"
        v-html="$page.episode.content"
      />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.episode.title,
    };
  },
};
</script>

<page-query>
query episode ($id: ID!) {
  episode: episode (id: $id) {
    title
    subtitle
    cover_image (blur: 10)
    center
    path
    content
  }
}
</page-query>

<style lang="scss">
.centeralign {
  text-align: center !important;
}

.episode-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.episode {
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
