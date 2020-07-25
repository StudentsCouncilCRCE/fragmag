<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">Photography</h1>
    <div
      class="content pt-1 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <a v-for="photo in $page.photos.edges" :key="photo.node.id">
        <PhotoViewCard :item="photo.node" />
      </a>
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
  photos: allPhotography {
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
    title: "Photography",
  },
};
</script>
