<template>
  <div>
    <header-index></header-index>
    <div>我是layout</div>
  </div>
</template>

<script>
import HeaderIndex from "../../components/header.vue";
export default {
  name: "LayoutIndex",
  components: { HeaderIndex },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less"></style>
