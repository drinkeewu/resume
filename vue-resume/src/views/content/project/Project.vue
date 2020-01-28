<template>
  <block-wrapper title="项目经历">
    <text-section
      v-for="(project, pIndex) in projects"
      :key="`project${pIndex}`"
      :title="project.title"
    >
      <template slot="title">
        <flex
          justify="space-between"
          align="center"
          wrap="wrap"
        >
          <h1>{{ project.title }}</h1>
          <div
            v-if="project.tags && project.tags.length > 0"
            class="project-tag-wrapper"
          >
            <div
              v-for="(tag, tagIndex) in project.tags"
              :key="`${pIndex}-tag${tagIndex}`"
              class="project-tag"
            >
              {{ tag }}
            </div>
          </div>
        </flex>
      </template>
      <p>
        <span class="font-bold">
          主要技术栈:
        </span>
        <template v-for="(tech, techIndex) in project.techs">
          <em :key="`${pIndex}-tech-${techIndex}`">
            {{ tech }}
          </em>
          {{ !isLastOf(project.techs, techIndex) ? "、" : "" }}
        </template>
      </p>
      <p class="font-bold">
        实现功能:
      </p>
      <ul>
        <li
          v-for="(feature, fIndex) in project.features"
          :key="`${pIndex}-row-${fIndex}}`"
        >
          {{ feature }}
        </li>
      </ul>
      <p>
        <span class="font-bold">
          项目职责:
        </span>
      </p>
      <template v-for="(duty, dIndex) in project.dutys">
        <span :key="`${pIndex}-duty${dIndex}`">
          {{ duty }}
          {{ !isLastOf(project.dutys, dIndex) ? "、" : "" }}
        </span>
      </template>
    </text-section>
  </block-wrapper>
</template>

<script>
import { BlockWrapper, TextSection } from '@/components';

export default {
  name: 'Project',
  components: {
    'block-wrapper': BlockWrapper,
    'text-section': TextSection,
  },
  data() {
    return {
      projects: [
        {
          title: 'Treep趣地接',
          techs: ['VueJs', 'ElementUI', 'axios', 'BaiduMap API', 'Echarts'],
          features: [
            '旅游供应商可在该平台上进行旅游产品、酒店、订单、财务等管理',
            '订单数据统计、查看导游在地图上的实时位置',
            '旅游套餐定制化、行程定制化',
            '角色权限管理、支持多语言切换',
          ],
          dutys: ['订单模块开发', '旅游/行程定制化模块开发', '通用组件库封装', '系统日常维护优化'],
          tags: ['供应商管理平台'],
        },
        {
          title: 'Distributor',
          techs: ['VueJs', 'ElementUI', 'axios'],
          features: [
            '供旅游产品分销商在平台上进行产品预订、酒店预订、财务管理、订单管理等操作',
            'PC端、Wap端支持；多语言切换支持',
          ],
          dutys: ['系统架构', '产品模块', '酒店模块', '首页概览', 'Wap端开发'],
          tags: ['分销商采购平台'],
        },
        {
          title: 'Micro Mall',
          techs: ['VueJs', 'ElementUI', 'VantUI', 'axios'],
          features: ['供消费者在网站上进行产品选购、下单及付款', 'PC端、Wap端支持'],
          dutys: ['网站搭建', '所有功能模块开发'],
          tags: ['C端微商城'],
        },
        {
          title: '数据质量平台',
          techs: ['VueJs', 'Echarts', 'ElementUI', 'axios'],
          features: [
            '数据汇聚、数据抽样、元数据管理',
            '数据大屏展示、数据质量检测、数据质量统计分析及报表导出、数据清洗',
            '角色权限管理、日志管理',
          ],
          dutys: ['系统架构', '通用图表组件库封装', '所有功能模块前端开发'],
          tags: ['数据治理'],
        },
        {
          title: '智慧教育数据平台',
          techs: ['VueJs', 'Echarts'],
          features: [
            '汇聚广东省内各地教师、学生数据, 并通过图表进行多个维度的分析',
          ],
          tags: ['海量图表分析'],
          dutys: ['项目重构', '逻辑抽离', '常用组件封装'],
        },
      ],
    };
  },
  methods: {
    isLastOf(list, index) {
      const { length } = list;
      return index === length - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/common.scss";
ul {
  margin: 0;
  padding-left: 5px;
}
ul li {
  list-style: none;
  line-height: 1.8;
  &:before {
    content: "●"; //'\25CF'
    color: $deep-blue;
    display: inline-block;
  }
}
.project-tag-wrapper {
  display: flex;
  flex-shrink: 0;
  .project-tag {
    margin: 10px 5px;
    background: #cfffd9;
    color: $deep-blue;
    padding: 0 15px;
    line-height: 2;
    border-radius: 15px;
    font-weight: bold;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
