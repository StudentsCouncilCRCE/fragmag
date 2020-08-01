<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">BE IT</h1>
    <div class="content pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <BECard v-for="person in $page.it.edges" :key="person.node.id" :person="person.node" />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
 it: allIt {
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
    title: "BE IT",
  },
};
</script>
