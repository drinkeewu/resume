<template>
  <div
    class="comp-progress"
    :style="wrapperStyle"
  >
    <div
      class="comp-progress-inner"
      :style="innerStyle"
    />
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    height: {
      type: String,
      default: '20px',
    },
  },
  computed: {
    progressLength() {
      const { value, max } = this;
      return `${((value / max) * 100).toFixed(2)}%`;
    },
    wrapperStyle() {
      return {
        height: this.height,
      };
    },
    innerStyle() {
      const { height, progressLength } = this;
      return {
        width: progressLength,
        height,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.comp-progress {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: rgba($color: $deep-blue, $alpha: .4);
  &-inner{
    background: $deep-blue;
  }
}
</style>
