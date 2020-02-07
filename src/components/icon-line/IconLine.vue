<template>
  <div
    class="comp-icon-line"
    :style="style"
  >
    <i :class="iconClass" />
    <span class="text">
      <a :href="linkHref">
        {{ text }}
      </a>
    </span>
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
    linkType: String,
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
    linkHref() {
      const { linkType, text } = this;
      return linkType ? `${linkType}:${text}` : text;
    },
  },
};
</script>

<style scoped lang="scss">
.comp-icon-line {
  display: flex;
  align-items: center;
  font-size: 16px;
  .iconfont {
    font-size: 20px;
  }
  .text {
    margin-left: 10px;
    &:hover{
      a{
        opacity: .7;
      }
    }
  }

}

</style>
