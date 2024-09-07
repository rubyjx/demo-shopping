<template>
  <div class="header">
    <van-nav-bar
      class="nav-bar"
      left-arrow
      :title="title"
      @click-left="$router.go(-1)"
      v-if="leftButtonShow"
    >
    </van-nav-bar>
    <van-nav-bar
      class="nav-bar"
      :title="title"
      @click-left="$router.go(-1)"
      v-else
    >
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "HeaderIndex",
  props: {
    title: {
      type: String,
      default: "",
    },
    leftButtonShow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped lang="less">
/deep/ .van-icon-arrow-left {
  color: #333 !important;
}
</style>
