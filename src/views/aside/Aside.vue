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
      <!-- 技能水平 -->
      <block-wrapper
        id="skill"
        theme="dark"
        title="技能水平"
        class="skill-level"
      >
        <ul>
          <li
            v-for="(skill, skillIndex) in skills"
            :key="`skill${skillIndex}`"
            v-html="skill"
          />
        </ul>
      </block-wrapper>
      <!-- 个人评价 -->
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
    </div>


    <div class="resume-aside-bottom" />
  </div>
</template>

<script>
import {
  IconLineList, BlockWrapper,
} from '@/components';


export default {
  name: 'Aside',
  components: {
    'icon-list': IconLineList,
    'block-wrapper': BlockWrapper,
  },
  data() {
    return {
      skills: [
        '扎实的JavaScript基础, 熟悉ES6+ 新特性',
        '熟悉Sass、Less等css预处理库',
        '掌握Vue.js (vuex/vue-router), 并理解其实现原理; 熟悉React(react-router/redux/dva)等MV*框架, 且拥有实际开发经验',
        '熟悉使用Echarts进行数据可视化开发, 了解Canvas API',
        '熟练使用Eslint、commitizen、TypeScript等工具规范代码',
        '理解前端工程化, 熟悉项目脚手架及Webpack常用配置; 熟悉git、svn代码协作工具',
        '熟悉HTTP、TCP/IP; 熟悉常用跨域解决方案; 了解浏览器工作原理、前端性能优化',
        '熟悉使用Taro框架进行小程序开发, 了解小程序原生API; 了解React Native、Flutter、uni-app等跨段框架',
        '了解Mocha、Karma等单元测试框架',
      ],
      comments: [
        '拥有良好的代码编写习惯、清晰的产品思维、良好的业务理解能力、沟通能力和团队协作能力。',
        '较强的自我驱动学习能力, 乐于钻研学习新技术, 时刻关注行业动态拓展视野',
        '有公共组件库开发经验, 开发并主导过多个大型项目; 拥有自动化部署实践经验',
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
      width: 220px;
      height: 220px;
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
