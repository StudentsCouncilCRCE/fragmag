<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">Photography</h1>
    <div
      class="content pt-1 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
    >
      <PhotoViewCard
        v-for="photo in $page.photos.edges"
        :key="photo.node.id"
        :item="photo.node"
      />
      <!-- <vue-tailwind-modal
        :showing="showModal != null"
        @close="showModal = null"
        :showClose="true"
      >
        <g-image :src="showModal.node.image" />
      </vue-tailwind-modal> -->
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
        image (blur: 10, width: 400, height: 400)
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
import VueTailwindModal from "vue-tailwind-modal";

export default {
  data() {
    return {
      showModal: null,
    };
  },
  components: {
    PhotoViewCard,
    VueTailwindModal,
  },
  metaInfo: {
    title: "Photography",
  },
};
</script>
