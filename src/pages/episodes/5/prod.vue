<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">BE Production</h1>
    <div class="pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <BECard v-for="person in $page.prod.edges" :key="person.node.id" :person="person.node" />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
 prod: allProd {
    edges {
      node {
        id
        name
        line
        image (blur: 10, width: 180, height: 320)
        path
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
</style>

<script>
import BECard from "~/components/BECard.vue";

export default {
  components: {
    BECard,
  },
  metaInfo: {
    title: "BE Prod",
  },
};
</script>
