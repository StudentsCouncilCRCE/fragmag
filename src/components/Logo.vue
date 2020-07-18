<template>
  <g-link class="logo" to="/">
    <span class="logo__text">
      &larr;
      {{ $static.metadata.siteName }}
      <g-image width="13rem" src="~/favicon.png"></g-image>
    </span>
  </g-link>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.logo {
  text-decoration: none;
  color: var(--body-color) !important;
  font-size: 0.9em;

  &__image {
    vertical-align: baseline;
    border-radius: 99px;
    height: 40px;
    width: 40px;
    margin-right: 0.5em;
  }
}
</style>
