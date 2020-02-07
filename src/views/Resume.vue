<template>
  <div
    id="base"
    class="resume-page"
  >
    <div
      id="pdf"
      class="resume-page__center"
    >
      <r-aside />
      <r-content />
    </div>
    <fix-button />
    <pdf-button />
  </div>
</template>

<script>
import Aside from '@/views/aside';
import Content from '@/views/content';
import { FixButton, PDFButton } from '@/components';


export default {
  name: 'Resume',
  components: {
    'r-aside': Aside,
    'r-content': Content,
    'fix-button': FixButton,
    'pdf-button': PDFButton,
  },
  data() {
    return {

    };
  },


};
</script>

<style lang="scss" scoped>
@import '../../src/styles/common.scss';
.resume-page {
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 1050px;
  height: 100%;
  background: #fff;
  box-shadow: 0 0 15px #c0c0c0;
  min-height: 1485.0755px;
  &__center {
    flex:1;
    display:flex;
  }

  @media screen and (max-width: 1049px){
    margin: 0;
    width: 100%;

    &__center{
      display: block;
    }
  }
}
</style>
