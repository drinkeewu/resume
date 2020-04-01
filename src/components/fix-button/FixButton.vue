<template>
  <div
    id="fix-button-wrapper"
    v-clickoutside="handleClose"
  >
    <div
      id="fix-button"
      @click="toggleDirShow(!directoryShow)"
    >
      <i :class="buttonIconClass" />
    </div>
    <transition
      enter-active-class="animated fadeInUp fastest"
      leave-active-class="animated fadeOutDown fastest"
    >
      <div
        v-show="directoryShow"
        id="directory-box"
      >
        <div
          v-for="(dir, dIndex) in directories"
          :key="`dir${dIndex}}`"
          class="directory-item"
          @click="scrollToTarget(dir.target)"
        >
          {{ dir.name }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import $ from 'jquery';
import { Clickoutside } from '@/utils';

export default {
  name: 'FixButton',
  directives: { Clickoutside },

  data() {
    return {
      directoryShow: false,
      directories: [
        { name: '基本信息', target: '#base' },
        { name: '教育背景', target: '#edu' },
        { name: '个人评价', target: '#evalution' },
        { name: '专业技能', target: '#skill' },
        { name: '工作经历', target: '#work' },
        { name: '项目经验', target: '#project' },
      ],
      activeDir: 'base',
    };
  },
  computed: {
    buttonIconClass() {
      return `iconfont ${this.directoryShow ? 'icon-arrow-down' : 'icon-directory'}`;
    },
  },
  methods: {
    toggleDirShow(val) {
      this.directoryShow = val;
    },

    handleClose() {
      this.toggleDirShow(false);
    },
    scrollToTarget(target) {
      const container = document.documentElement;
      const targetEl = document.querySelector(target);
      $(container).animate({
        scrollTop: $(targetEl)[0].offsetTop,
      });

      this.toggleDirShow(false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/common.scss";
@mixin box-shadow {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
}
#fix-button-wrapper {
  color: #666;
  #fix-button {
    display: none;
    @media screen and (max-width: 1049px) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      right: 40px;
      bottom: 40px;
      width: 40px;
      height: 40px;
      background: #fff;
      cursor: pointer;
      border-radius: 100%;
      border: 1px solid #eee;
      @include box-shadow();
    }
  }
}

#directory-box {
  z-index: 5;
  position: fixed;
  right: 40px;
  bottom: 90px;
  background: #fff;
  @include box-shadow();
  .directory-item {
    font-size: 16px;
    line-height: 3;
    padding: 0 15px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    &.is-active {
      border-bottom: 2px solid $deep-blue;
    }
    &:hover {
      outline: none;
      background: rgba($color: $deep-blue, $alpha: 0.2);
      color: $deep-blue;
    }
  }
  @media screen and (max-width: 1049px) {
    &:active {
      outline: none;
      background: rgba($color: $deep-blue, $alpha: 0.2);
      color: $deep-blue;
    }
  }
}
.animated.fastest {
  -webkit-animation-duration: 200ms;
  animation-duration: 300ms;
}
</style>
