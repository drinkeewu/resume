<!--
 * @Author: 吴俊杰 13202481990@qq.com
 * @Date: 2024-03-30 14:58:51
 * @LastEditors: 吴俊杰 13202481990@qq.com
 * @LastEditTime: 2024-03-31 22:08:25
 * @FilePath: /resume/src/views/content/work/Work.vue
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <block-wrapper
    id="work"
    title="工作经历"
    theme="dark"
  >
    <div
      v-for="(work, wIndex) in works"
      :key="`work-exp${wIndex}`"
      class="work-exp"
    >
      <p class="work-exp__company">
        {{ work.company }}
      </p>
      <p class="font-bold">
        {{ work.date }}
      </p>
      <p>工作内容：{{ work.duty }}</p>
    </div>
  </block-wrapper>
</template>

<script>
import { BlockWrapper } from '@/components';

export default {
  name: 'Work',
  components: {
    BlockWrapper,
  },
  data() {
    return {
      works: [
        {
          company: '广州金十信息科技有限公司（www.jin10.com）',
          date: '2020.04至今',
          duty: '负责通用组件库开发及维护，担任网站改版核心成员。主导付费金融工具开发及财经数据uni-app跨端小程序开发。参与后台改版维护，开发工作流插件提高团队效率。',
        },

        {
          company: '广东蔚海数问大数据科技有限公司',
          date: '2018.11 - 2020.03',
          duty: '主导数据质量平台开发，完成数据可视化大屏模块及主题定制。搭建公司内部Echarts图表组件库，提升团队效率。重构智慧教育数据平台，优化IE兼容性及代码结构。',
        },
        {
          company: '广州柒盼网络科技有限公司',
          date: '2017.7 - 2018.9',
          duty: '负责Treep境外旅游SaaS平台核心模块开发，包括行程定制、实时定位、订单导出等功能。独立完成微商城系统PC/Wap端开发，支持多语言及多种支付方式。',
        },

        {
          company: '中山福瑞设备有限公司(实习)',
          date: '2017.3 - 2017.6',
          duty: '参与OA系统开发，提升公司运营效率。',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/common.scss";

 .work-exp {
    &__company {
      font-size: 16px;
      font-weight: bold;
      color: $deep-blue;

    }
  }
</style>
