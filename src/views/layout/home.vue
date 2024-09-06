<template>
  <div class="home">
    <van-nav-bar title="智慧商城" fixed />

    <van-search
      readonly
      shape="round"
      background="#f1f1f2"
      placeholder="请在此输入搜索关键词"
      @click="$router.push('/search')"
    />

    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="item in banners" :key="item.imgUrl">
        <img :src="item.imgUrl" alt="image not exists" />
      </van-swipe-item>
    </van-swipe>

    <van-grid column-num="5" icon-size="40">
      <van-grid-item
        v-for="item in navs"
        :key="item.imgUrl"
        :icon="item.imgUrl"
        :text="item.text"
        @click="$router.push('/category')"
      />
    </van-grid>

    <div class="main">
      <img src="@/assets/main.png" alt="" />
    </div>

    <div class="guess">
      <p class="guess-title">—— 猜你喜欢 ——</p>

      <div class="goods-list">
        <GoodsItem
          v-for="item in products"
          :key="item.goods_id"
          :item="item"
        ></GoodsItem>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem.vue";
import { getHomeData } from "@/api/home";
export default {
  name: "HomePage",
  components: {
    GoodsItem,
  },
  data() {
    return {
      banners: [], // 轮播
      navs: [], // 导航
      products: [], // 商品
    };
  },
  async created() {
    const {
      data: { pageData },
    } = await getHomeData();
    this.banners = pageData.items[1].data;
    this.navs = pageData.items[3].data;
    this.products = pageData.items[6].data;
    console.log(this.products);
  },
};
</script>

<style lang="less" scoped>
// 主题 padding
.home {
  padding-top: 100px;
  padding-bottom: 50px;
}

// 导航条样式定制
.van-nav-bar {
  z-index: 999;
  background-color: #c21401;
  ::v-deep .van-nav-bar__title {
    color: #fff;
  }
}

// 搜索框样式定制
.van-search {
  position: fixed;
  width: 100%;
  top: 46px;
  z-index: 999;
}

// 分类导航部分
.my-swipe .van-swipe-item {
  height: 185px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 185px;
}

// 主会场
.main img {
  display: block;
  width: 100%;
}

// 猜你喜欢
.guess .guess-title {
  height: 40px;
  line-height: 40px;
  text-align: center;
}

// 商品样式
.goods-list {
  background-color: #f6f6f6;
}
</style>
