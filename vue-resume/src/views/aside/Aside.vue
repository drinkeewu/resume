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
    </div>

    <div class="resume-aside-bottom">
      <text-section
        title="教育背景"
        class="font-bold"
      >
        <p>电子科技大学中山学院</p>
        <p>2013.9 - 2017.7</p>
        <p>软件工程 - 本科</p>
      </text-section>
      <icon-list
        :list="contacts"
        class="icon-list"
      />
    </div>
  </div>
</template>

<script>
import { ProgressList, IconLineList, TextSection } from '@/components';

export default {
  name: 'Aside',
  components: {
    'progress-list': ProgressList,
    'icon-list': IconLineList,
    'text-section': TextSection,
  },
  data() {
    return {
      skills: [
        { name: 'JavaScript', value: 90 },
        { name: 'Vue', value: 90 },
        { name: 'React', value: 75 },
        { name: 'TypeScript', value: 70 },
      ],
      contacts: [
        { icon: 'emailalt', text: 'drinkeewu@foxmail.com' },
        { icon: 'phone', text: '13200000000' },
        { icon: 'github', text: 'github.com/drinkeewu' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$bg: #f7f8fa;
@import "../../styles/common.scss";
.resume-aside {
  flex: 3;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: $deep-blue;
  padding: 40px 30px;
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
  @media screen and (max-width: 1049px) {
  }
}
</style>
