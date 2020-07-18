<template>
  <Layout :show-logo="false">
    <!-- List articles -->
    <div class="articles">
      <ArticleCard
        v-for="edge in $page.articles.edges"
        :key="edge.node.id"
        :article="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  articles: allArticle(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
      }
    }
  }
}
</page-query>

<script>
import ArticleCard from "~/components/ArticleCard.vue";

export default {
  components: {
    ArticleCard,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>
