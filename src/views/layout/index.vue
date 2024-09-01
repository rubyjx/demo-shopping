<template>
  <div class="home">
    <!-- 导航条 -->
    <h2 class="title">大麦商城</h2>
    <!-- 搜索框 -->
    <div class="search">
      <Input
        type="text"
        class="search-input"
        placeholder="请在此输入搜索关键词"
        search
        enter-button
      />
      <div class="cart">
        <Icon type="ios-cart-outline" size="22" class="cart-icon" /><span
          >我的购物车</span
        >
      </div>
    </div>
    <div class="category"></div>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",

  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
.title {
  text-align: center;
  width: 100%;
  margin-top: 20px;
}
.search {
  display: flex;
  justify-content: center;
  margin-top: 10px;

  .search-input {
    width: 400px;
    height: 32px;
    border: 2px solid rgb(71, 141, 233);
    background: #fff;
    border-radius: 8px;
  }

  .cart {
    margin-left: 50px;
    display: flex;
    align-items: center;
    border: 1px solid #e3e4e5;
    padding: 4px;
    .cart-icon {
      margin-right: 13px;
    }
    span {
      font-size: 14px;
      color: rgb(71, 141, 233);
    }
  }
}
</style>
