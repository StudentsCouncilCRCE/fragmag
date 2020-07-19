<template>
  <g-link class="logo" to="/">
    <span class="logo__text">
      &larr;
      {{ $static.metadata.siteName }}
      <g-image class="logo__image" src="~/favicon.png"></g-image>
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
    display: inline;
    vertical-align: bottom;
    border-radius: 99px;
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5em;
  }
}
</style>
