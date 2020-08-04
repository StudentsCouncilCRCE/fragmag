<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">Our Well Wishers</h1>
    <div class="content pt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PhotoViewCard v-for="well in $page.well.edges" :key="well.node.id" :photo="well.node" />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
  well: allWell (sortBy:"index", order: ASC){
    edges {
      node {
        id
        index
        image (blur: 10)
        name
        class
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.content {
  align-items: center;
  vertical-align: center;
}
</style>

<script>
import PhotoViewCard from "~/components/PhotoViewCard.vue";

export default {
  components: {
    PhotoViewCard,
  },
  metaInfo: {
    title: "Our Well Wishers",
  },
};
</script>
