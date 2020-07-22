<template>
  <Layout :showLogo="false">
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
    <div class="main-content">
      <h1 id="fragmag">FRAGMAG</h1>
      <div class="flex flex-wrap sub-content">
        <div class="w-full md:w-1/3 mb-4">
          <g-image
            class="fragmag-cover"
            src="~/assets/images/fragmag.webp"
          ></g-image>
        </div>
        <div class="w-full md:w-2/3 mb-4">
          <h1 class="mt-2 text-4xl">Catalyse</h1>
          <blockquote style="text-align:left;">
            Catalyse: Cause or Accelerate (a reaction) by acting as a catalyst.
          </blockquote>
          <br />
          <p>
            Welcome to a mercurial world backed by the latest technological
            advancements. Today, the slow and steady cannot win the race, but
            the faster and smarter one can. Just as a Catalyst that speeds up a
            chemical reaction, we as individuals also need to catalyse ourselves
            to achieve all that we desire.
          </p>
          <p>
            Catalyse your aim & level up your game. Catalyse your life's
            mission. Catalyse the most influential factor for success, that is,
            self-esteem and see the magic that you create for your very own
            self! Believing that you can do it and deserve it, will help you to
            conquer the world!
          </p>
          <p>
            Your aim should not be to participate but to secure a podium finish.
            Catalyse yourself See the difference. Make it happen.
          </p>
        </div>
      </div>
      <br />
      <div class="pt-4 grid grid-cols-1 xl:grid-cols-3 gap-4">
        <ImageCard
          v-for="edge in $page.desks.edges"
          :key="edge.node.id"
          :item="edge.node"
        />
      </div>
      <div class="content-center text-center editorial">
        <LinkCard :link="editorial" />
      </div>
      <div class="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <LinkCard
          v-for="episode in episodes"
          :key="episode.title"
          :link="episode"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  desks: allDesk(sortBy:"index", order: ASC, filter: { editorial: {eq: false}}) {
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

.fragmag-cover {
  margin-right: 2rem;
  width: 100%;
  max-width: 50vh;
}

.editorial {
  margin: 0 auto !important;
}

.main-content {
  #fragmag {
    margin: 0;
    padding: 3rem 0;
    line-height: 3rem;
    text-align: center;
    font-size: 3.5rem;
    font-weight: normal;
    font-family: "Saira Stencil One", cursive;
    -webkit-text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    -moz-text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    letter-spacing: 0.5px;
    -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
    animation: fadein 3s;
    $breakpoint-tablet: 768px;
    @media (min-width: $breakpoint-tablet) {
      margin-top: 1.1rem;
      margin-bottom: 13rem;
      font-size: 8.5rem;
      letter-spacing: 2px;
      padding: 7.5rem 0;
      line-height: 7rem;
      margin-left: -2.5rem;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
.sub-content {
  padding: 0 0.5rem;
  text-align: justify;
  vertical-align: center;
  $breakpoint-tablet: 768px;
  @media (min-width: $breakpoint-tablet) {
    padding: 0 5rem;
  }
}
</style>

<script>
import ImageCard from "~/components/ImageCard.vue";
import LinkCard from "~/components/LinkCard.vue";

export default {
  data() {
    return {
      editorial: {
        title: "Editorial &rarr;",
        path: "/editorials",
      },
      episodes: [
        {
          title: "Over The Course",
          number: "Ep. 2",
          subtitle:
            "Reports, Alumni Interview, Achiever's Club and Hall Of Fame",
          path: "/episodes/2",
        },
        {
          title: "Glimpses Of Time",
          number: "Ep. 3",
          subtitle: "Coming on 25th July",
        },
        {
          title: "Writings on the Wall",
          number: "Ep. 4",
          subtitle: "Coming on 28th July",
        },
        {
          title: "The New Normal",
          number: "Ep. 5",
          subtitle: "Coming on 1st August",
        },
      ],
    };
  },
  components: {
    ImageCard,
    LinkCard,
  },
  metaInfo: {
    title: "Home",
  },
};
</script>
