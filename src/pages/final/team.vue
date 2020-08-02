<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">FrAgMag Team</h1>
    <div class="content pt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PhotoViewCard v-for="team in $page.team.edges" :key="team.node.id" :photo="team.node" />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
  team: allTeam (sortBy:"index", order: ASC){
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
    title: "FrAgMag Team",
  },
};
</script>
