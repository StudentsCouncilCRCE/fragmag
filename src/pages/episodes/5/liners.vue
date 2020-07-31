<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">BE One-Liners</h1>
    <div class="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <LinkCard :link="comps"></LinkCard>
      <LinkCard :link="it"></LinkCard>
      <LinkCard :link="elex"></LinkCard>
      <LinkCard :link="prod"></LinkCard>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
</style>

<script>
import LinkCard from "~/components/LinkCard.vue";

export default {
  data() {
    return {
      comps: {
        title: "BE Comps",
        path: "/episodes/5/comps",
      },
      it: {
        title: "BE IT",
        path: "/episodes/5/it",
      },

      elex: {
        title: "BE Elex",
        path: "/episodes/5/elex",
      },

      prod: {
        title: "BE Prod",
        path: "/episodes/5/prod",
      },
    };
  },
  components: {
    LinkCard,
  },
  metaInfo: {
    title: "The New Normal",
  },
};
</script>
