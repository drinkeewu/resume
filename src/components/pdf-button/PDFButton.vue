<template>
  <div
    id="pdf-button"
    class="pdf-button"
    @click="handleGetPDF"
  >
    <span class="large">
      下载PDF简历
    </span>
    <span class="small">
      <i class="iconfont icon-download" />
    </span>
  </div>
</template>

<script>
import { isDevelop } from '@/common';

export default {
  name: 'PDFButton',
  methods: {
    handleGetPDF() {
      const a = document.createElement('a');
      const isSupportDownload = 'download' in a;
      if (isSupportDownload) {
        const href = `${isDevelop ? '' : '/resume'}/pdf/resume.pdf`;
        a.setAttribute('href', href);
        a.setAttribute('download', '简历 | 吴俊杰 - 前端工程师 - 3年工作经验.pdf');
        a.click();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';
.pdf-button {
  position: fixed;
  line-height: 3;
  right: 40px;
  bottom: 40px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  background: $deep-blue;
  border: none;
  border-radius: 20px;
  outline: none;
  .large {
    padding: 0 20px;
    display: block;
  }
  .small {
    display: none;
    padding: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  @media screen and (max-width: 1049px) {
    bottom: 100px;
    .large {
      display: none;
    }
    .small {
      display: block;
    }
    #pdf-button {
      display: none;
    }
  }
}
</style>
