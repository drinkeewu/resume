<template>
  <div class="comp-text-section">
    <h1 class="comp-text-section__title">
      {{ title }}
    </h1>
    <div class="comp-text-section__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextSection',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
$text-color: #6c6b6b;
.comp-text-section {
  margin: 20px 0;
  text-align: left;
  &__title {
    color: $text-color;
    font-size: 25px;
  }
  &__content {
    color:$text-color;
  }

}
</style>
