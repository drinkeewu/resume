<template>
  <div class="resume-content">
    <work />
    <project />
  </div>
</template>

<script>
import Project from './project';
import Work from './work';

export default {
  name: 'Content',
  components: {
    Project,
    Work,
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
