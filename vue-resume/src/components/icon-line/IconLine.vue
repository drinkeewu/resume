<template>
  <div
    class="comp-icon-line"
    :style="style"
  >
    <i :class="iconClass" />
  </div>
</template>

<script>
import { DEFAULT_COLOR } from '@/common/constants';

export default {
  name: 'IconLine',
  props: {
    icon: {
      type: String,
      default: '',
      required: true,
    },
    text: {
      type: String,
      default: '',
      required: true,
    },
    color: {
      type: String,
      default: DEFAULT_COLOR,
    },
  },
  computed: {
    iconClass() {
      return `iconfont icon-${this.icon}`;
    },
    style() {
      return {
        color: this.color,
      };
    },
  },
};
</script>

<style>

</style>
