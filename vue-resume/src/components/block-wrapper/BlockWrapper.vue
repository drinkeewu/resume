<template>
  <div class="block-wrapper">
    <div class="block-wrapper-header">
      <div class="block-wrapper-header__title">
        {{ title }}
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BlockWrapper',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/common.scss";
@mixin split-line {
  position: absolute;
  display: block;
  top: 36px;
  content: "";
  background: #f6f6f6;
  height: 2px;
  width: calc(50% - 120px);
}
.block-wrapper {
  margin-bottom: 15px;
  &-header {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 15px 0;
    &:before {
      left: 0;
      @include split-line();

    }
    &:after {
      right: 0 ;
      @include split-line();
    }
    &__title {
      line-height: 2;
      width: 200px;
      background: #f7f8fa;
      text-align: center;
      border-radius: 20px;
      color: $deep-blue;
      font-size: 22px;
      font-weight: bold;
    }
  }
}
</style>
