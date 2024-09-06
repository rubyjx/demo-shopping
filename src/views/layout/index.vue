<template>
  <div class="home">
    <router-view></router-view>

    <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item
        v-for="(item, index) in tabbars"
        :key="index"
        :to="item.path"
        :icon="item.icon"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",

  data() {
    return {
      tabbars: [
        {
          path: "/home",
          title: "首页",
          icon: "home-o",
        },
        {
          path: "/category",
          title: "分类页",
          icon: "apps-o",
        },
        {
          path: "/cart",
          title: "购物车",
          icon: "shopping-cart-o",
        },
        {
          path: "/user",
          title: "我的",
          icon: "user-o",
        },
      ],
    };
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
