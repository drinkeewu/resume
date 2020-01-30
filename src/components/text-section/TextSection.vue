<template>
  <div class="comp-text-section">
    <div
      class="comp-text-section__title"
      :style="titleStyle"
    >
      <slot
        name="title"
      >
        <h1>
          {{ title }}
        </h1>
      </slot>
    </div>
    <div class="comp-text-section__content">
      <slot />
    </div>
  </div>
</template>

<script>
import { DEFAULT_COLOR } from '@/common/constants';

export default {
  name: 'TextSection',
  props: {
    title: {
      type: String,
      default: '',
    },
    titleColor: {
      type: String,
      default: DEFAULT_COLOR,
    },
  },
  computed: {
    titleStyle() {
      return {
        color: this.titleColor,
      };
    },
  },
};
</script>

<style  lang="scss">
$text-color: #6c6b6b;
.comp-text-section {
  margin: 20px 0;
  text-align: left;
  &__title {
    h1 {
      margin: 10px 0;
      font-size: 25px;
    }
  }
  &__content {
    color:$text-color;
  }

}
</style>
