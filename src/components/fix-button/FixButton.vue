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
  </div>
</template>

<script>
import Clickoutside from '@/utils/clickoutside';

// eslint-disable-next-line no-restricted-properties
const cubic = value => Math.pow(value, 3);
const easeInOutCubic = value => (value < 0.5
  ? cubic(value * 2) / 2
  : 1 - cubic((1 - value) * 2) / 2);


export default {
  name: 'FixButton',
  directives: { Clickoutside },

  data() {
    return {
      directoryShow: false,
      directories: [
        { name: '基本信息', target: '#base' },
        { name: '个人评价', target: '#evalution' },
        { name: '工作经历', target: '#work' },
        { name: '教育背景', target: '#edu' },
        { name: '项目内容', target: '#project' },
      ],
      activeDir: 'base',
    };
  },
  computed: {
    buttonIconClass() {
      return `iconfont ${this.directoryShow
        ? 'icon-arrow-down'
        : 'icon-directory'}`;
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
      container.scrollTop = targetEl.getBoundingClientRect().top;
      // const el = document.documentElement;
      // let targetEl;
      // if (target) {
      //   targetEl = document.querySelector(target);
      //   if (!el) {
      //     throw new Error(`target is not existed: ${target}`);
      //   }
      // }
      // const beginTime = Date.now();
      // const beginValue = el.scrollTop;
      // console.log('begin', beginValue, el);
      // const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
      // const frameFunc = () => {
      //   const progress = (Date.now() - beginTime) / 500;
      //   console.log('progress', progress);
      //   if (progress < 1) {
      //     el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
      //     rAF(frameFunc);
      //   } else {
      //     el.scrollTop = targetEl.getBoundingClientRect().top;
      //   }
      // };
      // rAF(frameFunc);
      this.toggleDirShow(false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
@import url("//at.alicdn.com/t/font_1624240_yo1m6944w8m.css");
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
    &.is-active {
      border-bottom: 2px solid $deep-blue;
    }
    &:hover{
      outline: none;
      background: rgba($color: $deep-blue, $alpha: .2);
      color: $deep-blue;
    }
  }
}
</style>
