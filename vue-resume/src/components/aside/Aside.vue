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
      </div>
      <progress-list :data="skills" />
    </div>

    <div class="resume-aside-bottom" />
  </div>
</template>

<script>
import { ProgressList } from '@/components';


export default {
  name: 'Aside',
  components: {
    'progress-list': ProgressList,
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
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$bg: #f7f8fa;
@import '../../styles/common.scss';
.resume-aside {
  color: $deep-blue;
  flex: 3;
  padding: 50px;
  box-sizing: border-box;
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
      font-weight: bold;
      .name {
        font-size: 30px;
      }
    }
  }
}
</style>
