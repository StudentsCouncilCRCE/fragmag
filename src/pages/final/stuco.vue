<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">Students' Council Journey 2019-20</h1>
    <div class="content pt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PhotoViewCard v-for="stuco in $page.stuco.edges" :key="stuco.node.id" :photo="stuco.node" />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
  stuco: allStuco (sortBy:"index", order: ASC){
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
    title: "Students' Council Journey 2019-20",
  },
};
</script>
