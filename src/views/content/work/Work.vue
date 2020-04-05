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
          company: '广东蔚海数问大数据科技有限公司',
          date: '2018.11 - 2020.03',
          duty: '参与数据质量平台产品的需求分析, 独立完成前端开发工作, 重构公司内部小型BI系统, 主导前端团队公共组件库的封装及部署工作, 提高团队的开发效率, 协助公司其他产品及项目的前端开发工作。',
        },
        {
          company: '广州柒盼网络科技有限公司',
          date: '2017.7 - 2018.9',
          duty: '参与公司主要产品的模块开发, 主导B端商城系统的PC端及Wap端前端开发工作, 独立完成C端微商城PC及Wap系统的前端开发工作。',
        },

        {
          company: '中山福瑞设备有限公司(实习)',
          date: '2017.3 - 2017.6',
          duty: '熟悉开发流程, 参与需求分析, 协助团队完成新商家中心, 新运营中心等OA系统的前端开发工作, 提高公司业务团队的运营效率。',
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
