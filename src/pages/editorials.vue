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
    <h1 class="p-1 text-center">Editorial Team</h1>
    <div>
      <div class="m-4 grid grid-cols-1 xl:grid-cols-3 gap-5">
        <ImageCard
          v-for="edge in $page.editorials.edges"
          :key="edge.node.id"
          :item="edge.node"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  editorials: allDesk(sortBy:"index", order: ASC, filter: { editorial: {eq: true}}) {
    edges {
      node {
        id
        title
        desk
        cover_image (width: 640, height: 260, blur: 10)
        path
      }
    }
  }
}
</page-query>

<script>
import ImageCard from "~/components/ImageCard.vue";

export default {
  components: {
    ImageCard,
  },
  metaInfo: {
    title: "Editorials",
  },
};
</script>

<style scoped lang="scss">
.doodle {
  opacity: 0.75;
  display: flex;
  z-index: -1000;
  margin: 1rem 5rem;
  position: absolute;
  $breakpoint-tablet: 768px;
  @media (min-width: $breakpoint-tablet) {
    margin: 5rem 28rem;
  }
}
</style>
