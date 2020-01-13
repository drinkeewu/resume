<template>
  <div class="resume-aside">
    <img
      class="avatar"
      src="../../assets/avatar.png"
    >
    <div class="personal-desc">
      <p class="name">
        吴俊杰
      </p>
    </div>

    <r-progress :value="50" />
  </div>
</template>

<script>
import Progress from '@/components/progress';

export default {
  name: 'Aside',
  components: {
    'r-progress': Progress,
  },
};
</script>

<style lang="scss" scoped>
$bg: #F7F8FA;
$font-color: #33477C;
.resume-aside {
  color: $font-color;
  flex: 3;
  padding: 50px;
  box-sizing: border-box;
  background-color: $bg;
  .avatar {
    width: 240px;
    height: 240px;
    background-color:rgba($color: #6ACCFA, $alpha: .5);
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
</style>
