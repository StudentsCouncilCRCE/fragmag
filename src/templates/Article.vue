<template>
  <Layout>
    <div class="article-title">
      <h1 class="article-title__text">
        {{ $page.article.title }}
      </h1>
      <ArticleMeta :article="$page.article" />
    </div>
    <div class="article content-box">
      <div class="article__header">
        <g-image
          alt="Cover image"
          v-if="$page.article.cover_image"
          :src="$page.article.cover_image"
        />
      </div>
      <div class="article__content" v-html="$page.article.content" />
    </div>
  </Layout>
</template>

<script>
import ArticleMeta from "~/components/ArticleMeta";

export default {
  components: {
    ArticleMeta,
  },
  metaInfo() {
    return {
      title: this.$page.article.title,
      meta: [
        {
          name: "description",
          content: this.$page.article.description,
        },
      ],
    };
  },
};
</script>

<page-query>
query Article ($id: ID!) {
  article: article (id: $id) {
    title
    path
    timeToRead
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<style lang="scss">
.article-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.article {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.article-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.article-author {
  margin-top: calc(var(--space) / 2);
}
</style>
