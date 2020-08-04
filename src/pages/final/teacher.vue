<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">Event Coordinators</h1>
    <div class="content pt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PhotoViewCard
        v-for="teacher in $page.teacher.edges"
        :key="teacher.node.id"
        :photo="teacher.node"
      />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
  teacher: allTeacher (sortBy:"index", order: ASC){
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
    title: "Event Coordinators",
  },
};
</script>
