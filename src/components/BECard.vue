<template>
  <div class="container mx-auto py-2">
    <div class="bebox h-full w-full inline-grid max-w-xs lg:max-w-lg lg:flex rounded-lg shadow-lg">
      <div class="w-full lg:w-1/3">
        <g-image
          :src="person.image"
          fit="inside"
          width="180"
          height="320"
          class="h-full w-full rounded-t-lg lg:rounded-t-none lg:rounded-l-lg object-contain object-center"
        />
      </div>
      <div class="w-full lg:w-2/3 p-2 flex vcenter">
        <div class>
          <div class="font-semibold text-xl text-center">{{ person.name }}</div>
          <div class="text-sm my-1 opacity-75 text-center">{{ person.line }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["person"],
};
</script>

<style lang="scss">
.bebox {
  background-color: var(--bg-content-becard);
}
.vcenter {
  align-items: center;
  justify-content: center;
}
</style>
