<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">Hindi Literature</h1>
    <div class="content pt-4 grid grid-cols-1 gap-4">
      <HindiListItem v-for="hindi in $page.hindi.edges" :key="hindi.node.id" :hindi="hindi.node" />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
  hindi: allHindi(sortBy:"index", order: ASC,) {
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
  align-items: center;
}
</style>

<script>
import HindiListItem from "~/components/HindiListItem.vue";

export default {
  components: {
    HindiListItem,
  },
  metaInfo: {
    title: "Hindi Literature",
  },
};
</script>
