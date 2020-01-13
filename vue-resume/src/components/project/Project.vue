<template>
  <div class="resume-page-project" />
</template>

<script>
import { Timeline, TimelineItem } from 'element-ui';

export default {
  name: 'Project',
  components: {
    'el-timeline': Timeline,
    'el-timeline-item': TimelineItem,
  },
  data() {
    return {
      projects: [
        {
          name: 'Treep',
          date: '2017-08-01',
        },
        {
          name: 'Treep',
          date: '2017-08-01',
        },
      ],
    };
  },
};
</script>

<style>

</style>
