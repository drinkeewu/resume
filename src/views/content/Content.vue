<template>
  <div class="resume-content">
    <project />
  </div>
</template>

<script>
import Project from './project';

export default {
  name: 'Content',
  components: {
    project: Project,
  },
};
</script>

<style lang="scss" scoped>
.resume-content {
  flex-shrink: 0;
  flex: 6;
  padding: 20px 30px;
  box-sizing: border-box;
  background: #fff;
  @media screen and (max-width: 1049px){
    padding-bottom: 80px;
  }
}
</style>
