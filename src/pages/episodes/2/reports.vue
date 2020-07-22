<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">Reports</h1>
    <div class="content pt-4 grid grid-cols-1 gap-4">
      <ReportListItem
        v-for="report in $page.reports.edges"
        :key="report.node.id"
        :report="report.node"
      />
    </div>
  </Layout>
</template>

<style scoped lang="scss"></style>

<page-query>
query {
  reports: allReport(sortBy:"index", order: ASC,) {
    edges {
      node {
        id
        title
        category
        author
        path
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
import ReportListItem from "~/components/ReportListItem.vue";

export default {
  components: {
    ReportListItem,
  },
  metaInfo: {
    title: "Reports",
  },
};
</script>
