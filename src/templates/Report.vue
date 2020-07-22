<template>
  <Layout>
    <div class="report-title">
      <h1 class="report-title__text">
        {{ $page.report.title }}
      </h1>
      <div class="socials">
        <a
          :href="$page.report.instagram"
          v-if="$page.report.instagram"
          target="_blank"
          ><i class="fa fa-instagram fa-2x p-2"></i
        ></a>
        <a
          :href="$page.report.facebook"
          v-if="$page.report.facebook"
          target="_blank"
          ><i class="fa fa-facebook fa-2x p-2"></i
        ></a>
        <a
          :href="$page.report.whatsapp"
          v-if="$page.report.whatsapp"
          target="_blank"
          ><i class="fa fa-whatsapp fa-2x p-2"></i
        ></a>
        <a
          :href="$page.report.twitter"
          v-if="$page.report.twitter"
          target="_blank"
          ><i class="fa fa-twitter fa-2x p-2"></i
        ></a>
        <a
          :href="$page.report.linkedin"
          v-if="$page.report.linkedin"
          target="_blank"
          ><i class="fa fa-linkedin fa-2x p-2"></i
        ></a>
        <a
          :href="$page.report.website"
          v-if="$page.report.website"
          target="_blank"
          ><i class="fa fa-globe fa-2x p-2"></i
        ></a>
        <a
          :href="$page.report.youtube"
          v-if="$page.report.youtube"
          target="_blank"
          ><i class="fa fa-youtube fa-2x p-2"></i
        ></a>
        <a
          :href="$page.report.connect"
          v-if="$page.report.connect"
          target="_blank"
          ><i class="fa fa-connect fa-2x p-2"></i
        ></a>
      </div>
    </div>
    <div class="report content-box">
      <div class="report__header">
        <g-image
          alt="report Image"
          v-if="$page.report.cover_image"
          :src="$page.report.cover_image"
        />
      </div>
      <div class="report__content" v-html="$page.report.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.report.title,
    };
  },
};
</script>

<page-query>
query report ($id: ID!) {
  report: report (id: $id) {
    title
    category
    cover_image (blur: 10)
    instagram
    facebook
    youtube
    twitter
    linkedin
    whatsapp
    website
    connect
    path
    content

  }
}
</page-query>

<style lang="scss">
.report-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.report {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    text-align: center;

    img {
      width: 100%;
      max-height: 25rem;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    text-align: justify;
    font-family: "Noto Sans", sans-serif !important;
    font-size: 1.1rem;

    img {
      width: 100%;
      max-height: 20rem;
    }

    h2 {
      margin-top: 0;
    }

    p {
      color: var(--title-color);
    }
  }
}
</style>
