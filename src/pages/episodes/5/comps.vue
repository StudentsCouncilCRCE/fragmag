<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">BE Comps</h1>
    <div class="pt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <LinkCard :link="lockdown"></LinkCard>
      <LinkCard :link="comps"></LinkCard>
      <LinkCard :link="it"></LinkCard>
      <LinkCard :link="elex"></LinkCard>
      <LinkCard :link="prod"></LinkCard>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.doodle {
  opacity: 0.75;
  display: flex;
  z-index: -1000;
  margin: 1rem 5rem;
  position: absolute;
  $breakpoint-tablet: 768px;
  @media (min-width: $breakpoint-tablet) {
    margin: 2.5rem 30rem;
  }
}
</style>

<script>
import LinkCard from "~/components/LinkCard.vue";

export default {
  data() {
    return {
      lockdown: {
        title: "Lockdown Edition",
        subtitle: "",
        path: "/episodes/5/lockdown",
      },
      comps: {
        title: "BE Comps",
        subtitle: "",
        path: "/episodes/5/Comps",
      },
      it: {
        title: "BE IT",
        subtitle: "",
        path: "/episodes/5/it",
      },
      elex: {
        title: "BE Elex",
        subtitle: "",
        path: "/episodes/5/elex",
      },
      prod: {
        title: "BE Prod",
        subtitle: "",
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
