<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">BE Comps</h1>
    <div
      class="content pt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <BECard
        v-for="person in $page.comps.edges"
        :key="person.node.id"
        :person="person.node"
      />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
 comps: allComps {
    edges {
      node {
        id
        name
        line
        image (blur: 10)
        path
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
import BECard from "~/components/BECard.vue";

export default {
  components: {
    BECard,
  },
  metaInfo: {
    title: "BE Comps",
  },
};
</script>
