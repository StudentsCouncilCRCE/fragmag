<template>
  <Layout :show-logo="true">
    <h1 class="p-1 text-center">BE IT</h1>
    <div class="pt-4 grid grid-cols-1 lg:grid-cols-3 gap-4"></div>
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
</script>
