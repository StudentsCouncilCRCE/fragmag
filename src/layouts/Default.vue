<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <Logo v-if="showLogo" />
        <g-image width="50" v-if="!showLogo" src="~/favicon.png"></g-image>
        <g-image
          width="53"
          v-if="!showLogo"
          src="~/assets/images/crce.png"
        ></g-image>
      </div>

      <div class="header__right">
        <ToggleTheme />
      </div>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <span class="footer__copyright"
        >Copyright &copy; {{ new Date().getFullYear() }} Students' Council CRCE
        <br />
        <a
          href="https://instagram.com/frcrce_official?igshid=1xzzfigzk6x4l"
          target="_blank"
          ><i class="fa fa-instagram fa-2x p-2"></i
        ></a>
        <a
          href="https://www.youtube.com/channel/UCVXm63qDorgkAXRIEh7XLjA"
          target="_blank"
          ><i class="fa fa-youtube-play fa-2x p-2"></i
        ></a>
      </span>
    </footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  props: {
    showLogo: { default: true },
  },
  components: {
    Logo,
    ToggleTheme,
  },
  mounted() {
    require("css-doodle");
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
