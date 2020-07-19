<template>
  <Layout :show-logo="true">
    <h1 class="p-4">Editorial Team</h1>
    <br />
    <div>
      <div class="m-4 grid grid-cols-1 xl:grid-cols-3 gap-5">
        <ArticleCard
          v-for="edge in $page.editorials.edges"
          :key="edge.node.id"
          :article="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  editorials: allDesk(sortBy:"index", order: ASC, filter: { editorial: {eq: true}}) {
    edges {
      node {
        id
        title
        desk
        cover_image (width: 640, height: 260, blur: 10)
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
    title: "Editorials",
  },
};
</script>

<style scoped></style>
