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
      </div>
      <progress-list :data="skills" />

      <block-wrapper
        title="个人评价"
        theme="dark"
      >
        <ul>
          <li>善于根据需求提供合适的技术解决方案</li>
          <li>乐于钻研学习新技术, 时刻关注行业动态拓展视野</li>
          <li>拥有清晰的产品思维和较强的沟通能力, 能与团队合作融洽。</li>
          <li>
            良好的编码习惯, 熟练使用
            <em>Eslint</em>、<em>commitizen</em>
            等代码规范工具
          </li>
        </ul>
      </block-wrapper>
    </div>

    <div class="resume-aside-bottom">
      <block-wrapper
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
          <p>{{ work.date }}</p>
          <p>{{ work.duty }}</p>
        </div>
      </block-wrapper>

      <block-wrapper
        title="教育背景"
        class="font-bold"
        theme="dark"
      >
        <p>电子科技大学中山学院</p>
        <p>2013.9 - 2017.7</p>
        <p>软件工程 - 本科</p>
      </block-wrapper>


      <icon-list
        :list="contacts"
        class="icon-list"
      />
    </div>
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
      contacts: [
        { icon: 'emailalt', text: 'drinkeewu@foxmail.com' },
        { icon: 'phone', text: '13200000000' },
        { icon: 'github', text: 'github.com/drinkeewu' },
      ],
      works: [
        {
          company: '广州柒盼网络科技有限公司(趣地接)',
          date: '2017.7 - 2018.9',
          duty: '公司产品前端开发及维护、页面交互设计',
        },
        {
          company: '广东蔚海数问大数据科技有限公司',
          date: '2018.11 - 2019.2',
          duty: '公司产品开发及维护、组件库开发、技术规范设计',
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
  &-top {
    .avatar {
      width: 240px;
      height: 240px;
      background-color: rgba($color: #6accfa, $alpha: 0.5);
      border-radius: 50%;
      overflow: hidden;
    }
    .personal-desc {
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
  }
}
</style>
