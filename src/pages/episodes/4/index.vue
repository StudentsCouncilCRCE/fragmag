<template>
  <Layout :show-logo="true">
    <ClientOnly>
      <div class="doodle">
        <css-doodle>
          :doodle { @grid: 500x1/ 40vmin; perspective: 12vmin; } @place-cell:
          center; @size: 40% 1px; will-change: transform, opacity;
          transform-style: preserve-3d; background: linear-gradient(to left,
          @multi(@p([2-4]), @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d)), transparent
          @r(50%) ); animation: move @r(1s, 2s, .1) linear infinite;
          animation-delay: -@r(.1s, 2s); --trans: translateX(50%)
          rotateX(@r(-180deg, 180deg)) rotateY(@r(-180deg, 180deg))
          rotateZ(@r(-180deg, 180deg)); transform-origin: 0 center; transform:
          var(--trans) scale(2); opacity: 0; @keyframes move { 20% { opacity: 1;
          } 100% { transform: var(--trans) scale(0); } }
        </css-doodle>
      </div>
    </ClientOnly>
    <h1 class="p-1 text-center">Writings On The Wall</h1>
    <div class="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <LinkCard :link="english"></LinkCard>
      <LinkCard :link="technical"></LinkCard>
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
      english: {
        title: "English Literature",
        subtitle:
          "The poem, the old write-up, the incomplete write-up that finally made it through",
        path: "/episodes/4/english",
      },
      technical: {
        title: "Technical Literature",
        subtitle:
          "The field expertise of fine students and teachers of this institution",
        path: "/episodes/4/technical",
      },
    };
  },
  components: {
    LinkCard,
  },
  metaInfo: {
    title: "Writings On The Wall",
  },
};
</script>
