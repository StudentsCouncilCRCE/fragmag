<template>
  <Layout>
    <div class="article-title">
      <h1 class="article-title__text">{{ $page.article.title }}</h1>
      <ArticleMeta :article="$page.article" />
    </div>
    <div class="article content-box">
      <div class="article__content" v-html="$page.article.content" />
      <div class="article__author" v-html="$page.article.author" />
      <div class="article__class" v-html="$page.article.class" />
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
    section
    timeToRead
    class
    author
    content
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
    text-align: justify;
    font-family: "Noto Sans", sans-serif !important;
    font-size: 1.1rem;

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
