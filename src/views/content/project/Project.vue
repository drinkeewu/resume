<template>
  <block-wrapper
    id="project"
    title="项目经验"
    theme="dark"
  >
    <template v-for="(project, pIndex) in projects">
      <block-wrapper
        v-if="project.secondPage"
        id="second-page-title"
        :key="`${pIndex}-page-title`"
        title="项目经验"
        theme="dark"
      >
        <p class="project-company seconde-page-company">
          {{ project.company }}
        </p>
      </block-wrapper>
      <p
        v-if="project.company && !project.secondPage"
        :key="`company-${pIndex}`"
        class="project-company"
      >
        {{ project.company }}
      </p>
      <text-section
        :key="`project${pIndex}`"
        :title="project.title"
      >
        <template slot="title">
          <flex
            justify="space-between"
            align="center"
            wrap="wrap"
          >
            <div class="project-header">
              <h1 class="project-title">
                {{ project.title }}
              </h1>
              <span
                v-if="project.time"
                class="project-time"
              >
                {{ project.time.start }} - {{ project.time.end }}
              </span>
            </div>
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
          <strong>
            {{ project.role }}
          </strong>，
          <template v-for="(duty, dIndex) in project.dutys">
            <span :key="`${pIndex}-duty${dIndex}`">
              <span v-html="duty" />
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
      <flex
        v-if="pIndex === 2"
        :key="`more${pIndex}`"
        class="more"
        justify="center"
        direction="column"
        align="center"
      >
        <span class="more-text">
          More
        </span>
        <i class="el-icon-caret-bottom more-icon" />
      </flex>
    </template>
  </block-wrapper>
</template>

<script>
import { BlockWrapper, TextSection, Flex } from '@/components';

export default {
  name: 'Project',
  components: {
    BlockWrapper,
    TextSection,
    Flex,
  },
  data() {
    return {
      projects: [
        {
          company: '广州柒盼网络科技有限公司 - 项目',
          title: 'Treep趣地接',
          role: '核心开发人员',
          time: {
            start: '2017.8',
            end: '2018.9',
          },
          techs: ['VueJs', 'ElementUI', 'axios', 'BaiduMap API', 'Echarts', 'vue-i18n'],
          features: [
            '帮助东南亚地接社实现信息智能化运营管理、快速处理即订即玩订单，帮助地接社在中国地区的营销',
            '产品模块包括产品管理、云订单交易、实时库存、智能运营、财务管理、市场资源',
            '集成用户数据，做国内B2B分销，获取到实时库存，帮助提供信息和数据服务',
            '60多家签约用户，包括20多家付费用户，客户盈利额最小达到300万, 最高超过3000万',
          ],
          dutys: [
            '订单模块开发',
            '旅游/行程定制化模块开发',
            '实时库存模块',
            'SKU(产品)/商品管理模块',
            '通用组件库封装',
            '系统日常维护优化',
          ],
          tags: ['境外旅游SaaS平台'],
        },
        {
          title: 'Distributor',
          time: {
            start: '2017.8',
            end: '2018.9',
          },
          role: '核心开发人员',
          techs: ['VueJs', 'ElementUI', 'axios'],
          features: [
            '与Treep平台打通, 整合旅游项目、酒店、订单、包团产品等供应链信息',
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
            end: '2018.7',
          },
          role: '独立开发',
          techs: ['VueJs', 'ElementUI', 'VantUI', 'axios'],
          dutys: ['PC、Wap前端开发', '多语言切换模块开发'],
          features: [
            '针对不同的旅行社商户进行定制化开发的, 为商户提供实现产品展示和定制化购买, 订单管理的轻量级商城平台',
            '支持支付宝、微信、Paypal等多种支付方式, 服务于数十家商户, 并成功帮助商户提高业绩',
            'PC端、Wap端支持、多语言支持',
          ],
          tags: ['定制化微商城'],
        },

        {
          company: '广州蔚海数问大数据科技有限公司 - 项目',
          secondPage: true,
          title: '数据质量平台',
          time: {
            start: '2018.11',
            end: '2020.2',
          },
          role: '独立开发',
          techs: ['VueJs', 'Echarts', 'ElementUI', 'axios'],
          features: [
            '对源数据进行汇聚、抽样、检测及清洗修复',
            '根据数据质量检测生成统计分析报表和图表',
            '产品提供给企业、政府、学校等机构进行数据检测及修复, 并取得显著成果',
          ],
          dutys: [
            '负责项目搭建、项目长期的迭代开发和维护',
            '针对不同企业, 根据需求开发数据可视化大屏模块、定制主题开发',
            '进入测试阶段前的使用<em>vue-test-utils</em>对每个模块进行单元测试',
          ],
          tags: ['数据检测与治理'],
        },
        {
          title: 'Echarts图表组件库',
          role: '主导者、核心开发人员',
          time: {
            start: '2019.5',
            end: '2020.1',
          },
          tags: ['图表组件库'],
          techs: ['VueJs', 'Echarts', 'npm'],
          dutys: ['组件库项目的架构', '使用文档撰写', '组件开发规范设计'],
          features: [
            '根据过往项目开发过程中总结的使用场景, 对常用 <em>Echart</em> 组件进行二次封装并部署到 <em>npm</em> 服务器',
            '该组件库被广泛应用到公司项目开发中, 大幅度提高了数据可视化的开发效率, 减少重复造轮子',
          ],
        },
        {
          title: '智慧教育数据平台',
          role: '核心开发成员',
          time: {
            start: '2019.6',
            end: '2019.12',
          },
          techs: ['VueJs', 'Echarts'],
          features: [
            '帮助学校汇聚广东省内各地教师、学生数据',
            '将数据进行多个维度的分析, 并通过地图、关系图谱等图表进行展示',
          ],
          tags: ['教育信息可视化分析'],
          dutys: [
            '接手项目使用<em>vue-cli</em>工具对项目进行重构',
            '解决项目兼容性问题, 使其能兼容到IE9以上版本',
            '对冗余的代码解耦并进行二次封装',
          ],
        },
        {
          title: '羿+自助分析平台',
          role: '核心开发人员',
          time: {
            start: '2018.11',
            end: '2019.12',
          },
          techs: ['VueJs', 'Composition-api', 'Echarts'],
          tags: ['自助化统计与挖掘'],
          dutys: [
            '接手后根据业务逻辑对冗余代码进行拆分和重构, 并使其能够嵌入到多个数据可视化项目中',
          ],
          features: [
            '具有自助化多维统计分析与数据挖掘功能的平台',
            '帮助用户实现根据自身需求及特定的场景分析，对数据进行分析，满足不同应用场景的数据分析需求',
            '嵌入到公司部分具有重叠的项目中, 减少重复开发带来的时间成本和人力成本',
          ],
        },

        {
          title: '监所资源整合平台',
          role: '组员',
          time: {
            start: '2019.10',
            end: '2019.12',
          },
          tags: ['资源整合平台'],
          techs: ['VueJs', 'Echarts'],
          dutys: ['负责开发接口申请和审批模块', '改版后菜单栏组件的封装', '嵌入针对该系统定制化自助分析平台'],
          features: [
            '通过数据可视化的方式优化监所人员的信息展示',
            '帮助公安机关整合内部数据资源, 对技术接口进行权限管理',
            '优化业务审批流程',
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
    margin-right: 5px;
    color: $deep-blue;
    display: inline-block;
  }
}
#second-page-title{
  display: none;
}
.more {
  color: $deep-blue;
  &-text,
  &-icon {
    display: none;
    font-weight: bold;
    font-size: 18px;
  }
}
.title {
  color: $deep-blue;
  font-weight: bold;
}
.project-company {
  margin-top: 10px;
  text-align: center;
  color: #333;
  font-weight: bold;
}
.project-header {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  .project-title {
    margin-right: 10px;
  }
  .project-time {
    font-size: 16px;
    color: #666;
    font-weight: bold;
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
