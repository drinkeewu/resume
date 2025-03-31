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
              <!-- <span
                v-if="project.time"
                class="project-time"
              >
                {{ project.time.start }} - {{ project.time.end }}
              </span> -->
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
        <p v-if="project.url">
          <span class="title">
            产品链接：
          </span>
          <a
            v-if="project.url"
            :href="project.url"
            class="url"
            target="_blank"
          >
            {{ project.url }}
          </a>
        </p>

        <p v-if="project.techs && project.techs.length > 0">
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
        <p v-if="project.features && project.features.length > 0">
          <span class="title">
            项目描述:
          </span>
          <template v-for="(feature, fIndex) in project.features">
            <span :key="`${fIndex}-duty${fIndex}`">
              <span v-html="feature" />
              {{ !isLastOf(project.features, fIndex) ? "；" : "" }}
            </span>
          </template>
        </p>

        <p class="title">
          项目职责: <strong :style="{color: '#666'}">
            {{ project.role }}
          </strong>
        </p>
        <ul>
          <li
            v-for="(duty, dIndex) in project.dutys"
            :key="`${pIndex}-row-${dIndex}}`"
            v-html="duty"
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
          company: '广州金十信息科技有限公司 - 主要项目',
          title: '期货盯盘神器',
          role: '核心开发人员',
          url: 'https://qihuo.jin10.com/vip/watch/index.html',
          time: {
            start: '2020.04',
            end: '2023.03',
          },
          techs: ['VueJs', 'Echarts', 'Vant', 'Canvas', 'Web worker'],
          features: [
            '展示国内个种期货金融指标, 如实时行情、K线图、分时图、技术指标等。',
            'Websocket对接实时快讯、头条、公告等数据',
            '帮助用户实现盯盘、交易判断',
          ],
          dutys: [
            '使用<em>Vue.js</em>开发前端页面, 使用<em>Echarts</em>绘制数据图表, 使用<em>Canvas</em>绘制高性能k线行情图表',
            '使用<em>Websocket</em>对接各种实时快讯、头条、公告、指标推送等数据',
            '使用<em>Web worker</em>处理复杂计算任务, 行情加密文件二进制解压，提升页面性能',
          ],
          tags: ['期货金融资讯整合平台'],

        },
        {
          title: '金十首页',
          role: '主要开发及维护人员',
          url: 'https://www.jin10.com/',
          techs: ['VueJs', 'ElementUI', 'axios', 'Echarts', 'Vant', 'Canvas'],
          features: [
            '实时展示全球实时快讯、头条、公告等数据',
          ],
          dutys: [
            '参与首页通用组件开发, 日历部分模块开发',
            '加密行情数据对接',
          ],
          tags: ['实时快讯'],
        },
        {
          title: '金十财经日历',
          role: '主要开发及维护人员',
          url: 'https://rili.jin10.com/',
          techs: ['Nuxt.js', 'Websocket', 'Notification API'],
          features: [
            '通过加载全球各国的每日公布的紧急数据, 支持实时推送桌面通知',
            '帮助用户准确把握全球财经事件, 提前做好交易准备',
          ],
          dutys: [
            '使用<em>Nuxt.js</em>实现服务端渲染',
            '使用<em>Websocket</em>对接实时数据',
            '使用<em>Notification API</em>推送桌面通知',
            '使用<em>Echarts</em>对数据进行可视化展示, 并支持导出图片',
          ],
          tags: ['全球财经数据日历'],
        },
        {
          title: '金十开放平台（API开放平台）',
          role: '核心开发人员',
          url: 'https://open.jin10.com/',
          time: {
            start: '2020.04',
            end: '2023.03',
          },
          techs: ['VueJs', 'ElementUI', 'axios', 'Echarts', 'Vant', 'Canvas'],
          features: [
            '提供API接口给第三方使用, 具备说明文档、在线客服功能，为用户提供可定制化的数据服务',
          ],
          dutys: [
            '使用<em>Vue.js</em>开发前端页面, ',
            '使用配置数据开发提高开发效率',
            '独立开发用户注册登录、用户鉴权、完整下单流程及文档说明展示等核心功能',
          ],
          tags: ['API开放平台'],
        },
        {
          company: '广州金十信息科技有限公司 - 其他项目',
          title: '其他职责及工作成果：',
          dutys: [
            '开发提供提高快讯发布部分工作效率的Chrome浏览器插件、后台系统sftp一键部署工具插件、OSS命令行一键部署插件、前端与App端桥接通讯的插件开发与维护',
            '促销活动页开发、独家VIP工具开发、<em>uni-app</em>财经数据小程序开发、大量内部管理后台的开发及维护',
            '参与前端小组通用组件库开发、独立开发后台组件库、参与项目模板生成插件、可复用聊天室插件的开发维护',
            '使用<em>vue composition-api</em>重构历史项目插件，已经封装业务逻辑hooks，避免重复造轮子',
            '负责过多个付费课程栏目的开发，用户鉴权及支付购买流程的对接',
            '参与过多个面对企业用户的多语言产品开发',
          ],

        },
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
            '智能对接美团、大众点评、淘宝、携程、马蜂窝、同程、飞猪、去哪儿等平台分销订单',
            '产品模块包括产品管理、云订单交易、实时库存、智能运营、财务管理、市场资源',
            '集成用户数据，做国内B2B分销，获取到实时库存，帮助提供信息和数据服务',
            '60多家签约用户，包括20多家付费用户，客户盈利额最小达到300万, 最高超过3000万',
          ],
          dutys: [
            '旅游/行程定制化模块开发, 通过H5的<em>Drag API</em>实现行程拖拽排序功能',
            '通过与后台接口联动, 并使用<em>Baidu Map API</em>实时显示导游/司机定位信息',
            '基于<em>vue-pdf</em>、<em>pdf.js</em></em>、<em>html2canvas</em>封装组件, 实现订单确认单的显示与导出功能',
            '基于<em>ElementUI</em>封装可复用组件库</em>',
            '使用<em>Echarts</em>对订单统计信息进行数据可视化展示',
            '订单录入模块开发、SKU(产品)/商品管理模块、实时库存模块开发',
            '系统日常迭代开发、维护及优化',
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
            '通过与Treep平台打通, 整合旅游项目、酒店、订单、包团产品等供应链信息, 供旅游产品分销商在平台上进行产品预订、酒店预订、财务管理、订单管理等操作',
            '兼容PC端、Wap端, 支持多国语言切换功能',
          ],
          dutys: [
            '首页商品展示页面开发及改版调优',
            '使用<em>Vue.js</em>的<em>slot</em>接口封装可复用布局容器组件, 使用<em>vue-i18n</em>实现多国语言切换功能',
            '负责订单、酒店模块路由页面切换复杂交互的实现, 并使用<em>keep-alive</em>特性提升系统用户体验',
            '独立负责Wap端的技术选型、项目搭建架构及开发工作',
          ],
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
          dutys: [
            '通过使用本人封装的<em>ElementUI</em>业务组件库高效完成PC端全部功能模块的开发',
            '使用<em>VantUI</em>独立开发移动端所有功能模块',
            '使用<em>rem</em>配合<em>flex</em>实现移动端页面的响应式布局, 通过<em>Sass</em>实现主题颜色切换功能',
            '使用<em>vue-i18n</em>实现多国语言切换功能',
          ],
          features: [
            '针对不同的旅行社商户进行定制化开发的, 为商户提供实现产品展示和定制化购买, 订单管理的轻量级商城平台',
            '支持支付宝、微信、Paypal等多种支付方式, 服务于数十家商户, 并成功帮助商户提高业绩',
            'PC端、Wap端支持、多语言支持',
          ],
          tags: ['定制化微商城'],
        },

        {
          company: '广州蔚海数问大数据科技有限公司 - 项目',
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
            '独立完成系统所有功能模块, 负责项目搭建、项目长期的迭代开发和维护',
            '针对不同企业, 根据需求开发数据可视化大屏模块、定制主题开发',
            '使用<em>html2canvas</em>插件实现图表导出成文档的功能',
            '进入测试阶段前的使用<em>vue-test-utils</em>对核心组件进行单元测试',
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
          techs: ['VueJs', 'Echarts', 'npm', 'verdaccio', 'pm2'],
          dutys: [
            '组件库开发及提交规范制定, 基于<em>Vue.js</em>对<em>Echart</em>二次封装, 抽离通用<em>mixins</em>逻辑',
            '组件库项目的搭建及架构, 配置<em>Linux</em>服务器环境, 使用<em>verdaccio</em>搭建<em>npm</em>内部服务器, 通过<em>pm2</em>插件守护服务进程, 并部署到公司<em>Linux</em>服务器',
            '使用<em>vuepress</em>构建组件库说明文档网页, 编写组件使用示例代码, 撰写使用说明文档',
          ],
          features: [
            '根据过往项目开发过程中总结的使用场景, 对常用 <em>Echart</em> 图表进行二次封装并部署到 <em>npm</em> 服务器',
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
            '接手项目后, 使用<em>mixins</em>抽离重复的业务逻辑代码',
            '重构项目, 使项目能够嵌入到公司其他项目中并能兼容到IE9以上',
            '优化项目目录结构, 对接口代码进行统一管理, 提高维护效率',
            '使用<em>keep-alive</em>提高用户体验、减少不必要的接口调用, 以缓解后台服务器压力',
          ],
          features: [
            '具有自助化多维统计分析与数据挖掘功能的平台',
            '帮助用户实现根据自身需求及特定的场景分析，对数据进行分析，满足不同应用场景的数据分析需求',
            '嵌入到公司部分具有重叠功能的项目中, 减少重复开发带来的时间成本和人力成本',
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
          dutys: ['负责开发接口申请和审批流程模块', '改版后菜单栏组件的封装', '嵌入针对该系统定制化自助分析平台'],
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
  margin-top: 20px;
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
