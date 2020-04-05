<template>
  <div
    :id="id"
    class="block-wrapper"
  >
    <div
      class="block-wrapper-header"
    >
      <div
        class="block-wrapper-header__title"
        :class="{dark: theme === 'dark'}"
      >
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
    theme: {
      type: String,
      default: 'light',
    },
    // eslint-disable-next-line vue/require-default-prop
    id: {
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
  top: 26px;
  content: "";
  background: #f6f6f6;
  height: 2px;
  width: calc(50% - 120px);
}
.block-wrapper {
  margin-bottom: 15px;
  color: $text-color;
  text-align: left;
  &-header {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 5px 0;
    &:before {
      left: 0;
      @include split-line();
    }
    &:after {
      right: 0;
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
      &.dark {
        background: rgba($color: $deep-blue, $alpha: 0.1) ;
      }
    }
  }
}
</style>
