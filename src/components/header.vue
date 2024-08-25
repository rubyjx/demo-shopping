<template>
  <div class="header">
    <div><a>首页</a></div>
    <div><a>我的订单</a></div>
    <div><a>我的购物车</a></div>
  </div>
</template>

<script>
export default {
  name: "headerIndex",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 350px;
  border: 1px solid black;
}
</style>
