<template>
  <block-wrapper
    id="project"
    title="项目经历"
  >
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
          <h1>
            {{ project.title }}
            <span
              v-if="project.time"
              class="project-time"
            >
              {{ project.time.start }} - {{ project.time.end }}
            </span>
          </h1>
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
        <span class="title">
          主要技术栈:
        </span>
        <template v-for="(tech, techIndex) in project.techs">
          <em :key="`${pIndex}-tech-${techIndex}`">
            {{ tech }}
          </em>
          {{ !isLastOf(project.techs, techIndex) ? "、" : "" }}
        </template>
      </p>
      <p>
        <span class="title">
          项目职责:
        </span>
        <template v-for="(duty, dIndex) in project.dutys">
          <span :key="`${pIndex}-duty${dIndex}`">
            {{ duty }}
            {{ !isLastOf(project.dutys, dIndex) ? "、" : "" }}
          </span>
        </template>
      </p>

      <p class="title">
        项目描述:
      </p>
      <ul>
        <li
          v-for="(feature, fIndex) in project.features"
          :key="`${pIndex}-row-${fIndex}}`"
          v-html="feature"
        />
      </ul>
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
          time: {
            start: '2017.8',
            end: '2018.9',
          },
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
          time: {
            start: '2017.8',
            end: '2018.9',
          },
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
          time: {
            start: '2018.1',
            end: '2018.3',
          },
          techs: ['VueJs', 'ElementUI', 'VantUI', 'axios'],
          features: ['供消费者在网站上进行产品选购、下单及付款', 'PC端、Wap端支持'],
          dutys: ['网站搭建', '所有功能模块开发'],
          tags: ['C端微商城'],
        },
        {
          title: '数据质量平台',
          time: {
            start: '2018.11',
            end: '2019.5',
          },
          techs: ['VueJs', 'Echarts', 'ElementUI', 'axios'],
          features: [
            '对源数据进行汇聚、抽样、检测及清洗修复。',
            '根据数据质量检测生成统计分析报表和图表',
            '产品提供给企业、政府、学校等机构进行数据检测及修复, 并取得显著成果',
          ],
          dutys: [
            '负责项目搭建、项目长期的迭代开发和维护',
            '针对不同企业, 根据需求开发数据可视化大屏模块',
          ],
          tags: ['数据治理'],
        },
        {
          title: '智慧教育数据平台',
          time: {
            start: '2019.6',
            end: '2019.12',
          },
          techs: ['VueJs', 'Echarts'],
          features: [
            '汇聚广东省内各地教师、学生数据, 并通过图表进行多个维度的分析',
          ],
          tags: ['师生数据可视化分析'],
          dutys: ['项目重构', '逻辑抽离', '常用组件封装'],
        },
        {
          title: '羿+自助分析平台',
          time: {
            start: '2018.11',
            end: '2019.12',
          },
          techs: ['VueJs', 'Composition-api', 'Echarts'],
          tags: ['自助化多维统计分析与数据挖掘'],
          dutys: ['接手后根据业务逻辑对冗余代码进行拆分和重构, 并使其能够嵌入到多个数据可视化项目中'],
          features: [
            '具有自助化多维统计分析与数据挖掘功能的平台',
            '帮助用户实现根据自身需求及特定的场景分析，对数据进行分析，满足不同应用场景的数据分析需求。',
            '嵌入到公司部分具有重叠的项目中, 减少重复开发带来的时间成本和人力成本',
          ],
        },
        {
          title: 'Echarts图表组件库',
          time: {
            start: '2019.5',
            end: '2019.7',
          },
          techs: ['VueJs', 'Echarts', 'npm'],
          dutys: ['组件库项目的架构', '使用文档撰写', '组件开发规范设计'],
          features: [
            '根据过往项目开发过程中总结的使用场景, 对常用 <em>Echart</em> 组件进行二次封装并部署到 <em>npm</em> 服务器',
            '该组件库被广泛应用到公司项目开发中, 大幅度提高了数据可视化的开发效率, 减少重复造轮子',
          ],
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
  text-align: left;
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
.title {
  color: $deep-blue;
  font-weight: bold;
}

.project-time{
  margin-left: 10px;
  font-size: 16px;
  color: #666
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
