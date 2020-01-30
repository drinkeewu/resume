<template>
  <div class="comp-icon-line-list">
    <icon-line
      v-for="(item, index) in list"
      :key="`icon-line${index}`"
      :text="item.text"
      :icon="item.icon"
      :color="color"
    />
  </div>
</template>

<script>
import IconLine from './IconLine.vue';
import { DEFAULT_COLOR } from '@/common/constants';

export default {
  name: 'IconLineList',
  components: {
    'icon-line': IconLine,
  },
  props: {
    color: {
      type: String,
      default: DEFAULT_COLOR,
    },
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>

</style>
