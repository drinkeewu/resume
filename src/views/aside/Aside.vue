<template>
  <div class="resume-aside">
    <div class="resume-aside-top">
      <img
        class="avatar"
        src="../../assets/avatar.png"
      >
      <div class="personal-desc">
        <p class="name">
          吴俊杰
        </p>
        <p class="position">
          Web前端开发工程师
        </p>
        <p>男 / 1994.12</p>
        <span
          class="work-year"
        >
          3年工作经验
        </span>
      </div>
      <icon-list
        :list="contacts"
        class="icon-list"
      />
      <div class="online-link">
        <h3>在线简历地址</h3>
        <a href="https://drinkeewu.github.io/resume/">
          https://drinkeewu.github.io/resume/
        </a>
      </div>
      <block-wrapper
        id="edu"
        title="教育背景"
        class="font-bold"
        theme="dark"
      >
        <div class="text-center">
          <p>电子科技大学中山学院</p>
          <p>2013.9 - 2017.7</p>
          <p>软件工程 - 本科</p>
        </div>
      </block-wrapper>


      <block-wrapper
        id="evalution"
        title="个人评价"
        theme="dark"
      >
        <ul>
          <li
            v-for="(comment, commentIndex) in comments"
            :key="`comment${commentIndex}`"
            v-html="comment"
          />
        </ul>
      </block-wrapper>

      <block-wrapper
        id="skill"
        theme="dark"
        title="专业技能"
        class="skill-level"
      >
        <progress-list :data="skills" />
      </block-wrapper>
    </div>


    <div class="resume-aside-bottom" />
  </div>
</template>

<script>
import {
  ProgressList, IconLineList, BlockWrapper,
} from '@/components';


export default {
  name: 'Aside',
  components: {
    'progress-list': ProgressList,
    'icon-list': IconLineList,
    'block-wrapper': BlockWrapper,
  },
  data() {
    return {
      skills: [
        { name: 'JavaScript / ES 6+', value: 90 },
        { name: 'Vue', value: 90 },
        { name: 'React', value: 75 },
        { name: 'TypeScript', value: 70 },
        { name: 'CSS / Sass / Less', value: 80 },
        { name: 'Git / Svn', value: 80 },
        { name: 'Webpack', value: 70 },
        { name: 'Mocha / Karma', value: 60 },
      ],
      comments: [
        '善于根据需求提供合适的技术解决方案、使用各种工具提高生产力, 拥有清晰的产品思维和较强的沟通能力, 能与团队合作融洽。',
        '良好的JavaScript / ES6+ 基础; 乐于钻研学习新技术, 时刻关注行业动态拓展视野',
        '良好的编码习惯, 熟练使用Eslint、commitizen、TypeScript 等工具规范代码',
        '掌握Vue、React 等MV* 框架及其配套工具(路由、状态管理), 并了解其实现原理；熟悉使用Taro 进行小程序开发, 了解RN, uni-app等跨端开发框架',
        '熟悉HTTP/TCP、浏览器工作原理以及跨域解决方案; 了解性能优化',
        '熟悉使用Echarts 进行数据可视化开发, 了解Canvas API的使用',
        '拥有单元测试与自动化部署实践经验; 有公共组件库开发经验, 开发并主导过多个大型项目',

      ],
      contacts: [
        {
          icon: 'emailalt',
          text: 'drinkeewu@foxmail.com',
          linkType: 'mailto',
        },
        {
          icon: 'phone',
          text: '13202481990',
          linkType: 'tel',
        },
        {
          icon: 'github',
          text: 'https://github.com/drinkeewu',
        },
      ],

    };
  },
};
</script>

<style lang="scss" scoped>
$bg: #f7f8fa;
@import "../../styles/common.scss";

ul {
  padding-left: 20px;
  li {
    margin-bottom: 5px;
  }
}
.resume-aside {
  flex: 3;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: $deep-blue;
  padding: 40px;
  box-sizing: border-box;
  text-align: center;
  background-color: $bg;
  .online-link {
    h3 {
      margin: 5px 0;
    }

  }
  .icon-list {
    margin-left: 30px;
  }
  .work-year {
    padding: 0 10px;
    display: inline-block;
    background: #E3E6EE;
    color: #333;
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
  }
  &-top {
    .avatar {
      width: 240px;
      height: 240px;
      background-color: rgba($color: #6accfa, $alpha: 0.5);
      border-radius: 50%;
      overflow: hidden;
    }
    .personal-desc {
      margin-bottom: 10px;
      .name {
        font-size: 33px;
        // font-weight: bold;
      }
      .position {
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 1049px) {
    padding-top: 80px;
    .online-link {
      display: none;
    }
    .icon-list {
      margin-left: calc((100% - 240px) / 2);
    }
  }
}
</style>
