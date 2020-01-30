<template>
  <div class="comp-progress-list">
    <r-progress
      v-for="(item, index) in data"
      :key="`progress${index}`"
      :name="item.name"
      :value="item.value"
      :name-width="nameMaxWidth"
    />
  </div>
</template>

<script>
import Progress from './Progress.vue';

export default {
  name: 'ProgressList',
  components: {
    'r-progress': Progress,
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    nameMaxWidth() {
      const nameLengths = this.data.map(i => i.name.length);
      const maxLength = Math.max(...nameLengths) || 0;
      return `${maxLength * 14}px`;
    },
  },
};
</script>

<style scoped lang="scss">
.comp-progress-list {
  padding: 15px 0;
}

</style>
