<template>
  <div class="resume-page-project">
    <el-timeline>
      <el-timeline-item
        v-for="(project, index) in projects"
        :key="`project${index}`"
        :timestamp="project.date"
        color="#5DC3B1"
      >
        {{ project.name }}
      </el-timeline-item>
    </el-timeline>
  </div>
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
