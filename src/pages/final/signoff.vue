<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">Students' Council 2019-20 Signing Off</h1>
    <div class="content pt-2 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
      <PhotoViewCard
        v-for="signoff in $page.signoff.edges"
        :key="signoff.node.id"
        :photo="signoff.node"
      />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
  signoff: allSignoff (sortBy:"index", order: ASC){
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
    title: "Students' Council 2019-20 Signing Off",
  },
};
</script>
