<!--
 * @Author: 吴俊杰 13202481990@qq.com
 * @Date: 2025-03-30 14:58:51
 * @LastEditors: 吴俊杰 13202481990@qq.com
 * @LastEditTime: 2025-03-31 22:44:46
 * @FilePath: /resume/src/components/text-section/TextSection.vue
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div class="comp-text-section">
    <div
      v-if="title"
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
@import '../../styles/common.scss';
.comp-text-section {
  margin: 5px 0;
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
