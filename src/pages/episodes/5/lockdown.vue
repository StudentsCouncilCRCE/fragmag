<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">Lockdown Edition</h1>
    <div class="content pt-4 grid grid-cols-1 gap-4">
      <ArticleListItem
        v-for="article in $page.lockdown.edges"
        :key="article.node.id"
        :article="article.node"
      />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
 lockdown: allArticle(sortBy:"index", order: ASC, filter: {section: {eq: "lockdown"}}) {
    edges {
      node {
        id
        title
        class
        path
        author
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.content {
  text-align: justify;
}
</style>

<script>
import ArticleListItem from "~/components/ArticleListItem.vue";

export default {
  components: {
    ArticleListItem,
  },
  metaInfo: {
    title: "Lockdown Edition",
  },
};
</script>
