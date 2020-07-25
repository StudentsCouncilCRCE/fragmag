<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">Artwork</h1>
    <div
      class="content pt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <PhotoViewCard
        v-for="artwork in $page.artwork.edges"
        :key="artwork.node.id"
        :photo="artwork.node"
      />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
  artwork: allArtwork {
    edges {
      node {
        id
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
    title: "Artwork",
  },
};
</script>
