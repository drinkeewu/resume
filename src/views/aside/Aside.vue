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

      <progress-list :data="skills" />

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
      ],
      comments: [
        '善于根据需求提供合适的技术解决方案, 拥有清晰的产品思维和较强的沟通能力, 能与团队合作融洽。',
        '良好的<em>JavaScript</em> / <em>ES6+</em> 基础; 乐于钻研学习新技术, 时刻关注行业动态拓展视野',
        '良好的编码习惯, 熟练使用<em>Eslint</em>、<em>commitizen</em>、<em>TypeScript</em> 等工具规范代码',
        '掌握<em>Vue</em>、<em>React</em> 等MV* 框架；熟悉使用<em>Taro</em> 进行小程序开发',
        '熟悉使用<em>Echarts</em> 进行数据可视化开发',
        '熟悉<em>单元测试</em>与<em>travis-ci</em>自动化部署, 具有<em>npm</em>组件库开发经验',

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
      works: [
        {
          company: '广州柒盼网络科技有限公司',
          date: '2017.7 - 2018.9',
          duty: '负责公司各个旅游PC/Wap平台产品的开发与维护、通用组件库的建设',
        },
        {
          company: '广东蔚海数问大数据科技有限公司',
          date: '2018.11 - 至今',
          duty: '负责公司数据质量平台的前端开发工作、数据可视化公共组件库的建设、技术规范设计及技术文档的撰写',
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
  .work-exp {
    &__company {
      font-size: 16px;
      font-weight: bold;
      color: $deep-blue;

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
