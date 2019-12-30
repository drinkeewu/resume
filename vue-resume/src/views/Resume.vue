<template>
  <div class="resume-page">
    <r-header />
    <div class="resume-page__content">
      <project />
    </div>
  </div>
</template>

<script>

import { Project, Header } from '@/components';

export default {
  name: 'Resume',
  components: {
    'r-header': Header,
    project: Project,
  },
};
</script>

<style lang="scss" scoped>
.resume-page {
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 1050px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 15px #c0c0c0;
  min-height: 1485.0755px;
  &__content {
    flex:1;
    padding: 40px;
  }
}
</style>
