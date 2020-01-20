<template>
  <div class="comp-progress">
    <span
      class="comp-progress-name"
      :style="nameStyle"
    >
      {{ name }}
    </span>
    <div
      class="comp-progress-bar"
      :style="wrapperStyle"
    >
      <div
        class="comp-progress-bar__inner"
        :style="innerStyle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    name: {
      type: String,
      default: '',
      required: true,
    },
    nameWidth: {
      type: String,
      default: 'auto',
    },
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
    nameStyle() {
      return {
        width: this.nameWidth,
      };
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
@import "../../styles/common.scss";
.comp-progress {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  &-name {
    margin-right: 10px;
    text-align: right;
  }
  &-bar {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    background: rgba($color: $deep-blue, $alpha: 0.4);
    &__inner {
      background: $deep-blue;
    }
  }
}
</style>
