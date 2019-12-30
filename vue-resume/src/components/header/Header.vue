<template>
  <div class="resume-page-header">
    <div class="avatar">
      <img
        src=""
        alt=""
        class="avatar-img"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
$green: #5DC3B1;
.resume-page-header {
  width: 100%;
  background: $green;
  color: #fff;
  padding: 40px;
  box-sizing: border-box;
  .avatar {
    width: 200px;
    height: 200px;
    background: #eee;
    border-radius: 100%;
    &-img {
    }
  }
}
</style>
