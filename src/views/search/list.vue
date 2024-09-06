<template>
  <div class="goods">
    <van-nav-bar left-arrow title="商品列表"></van-nav-bar>
    <van-search v-model="searchKey" placeholder="请输入搜索关键词" show-action>
      <template #action>
        <van-icon name="search" @click="searchData()"></van-icon>
      </template>
    </van-search>
    <div class="good-list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="我是有底线的"
        @load="onLoadData"
        :offset="10"
      >
        <van-cell v-for="item in list" :key="item.id">
          <goods-item :item="item"></goods-item>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/components/GoodsItem.vue";
import { getGoods } from "@/api/goods";
export default {
  components: { GoodsItem },
  name: "ListIndex",
  data() {
    return {
      searchKey: "",
      loading: false,
      finished: false,
      page: 1,
      list: [],
      refreshing: false,
    };
  },
  async created() {
    this.searchKey = this.$route.query.search;
    this.list = [];
    this.page = 1;
    this.loadData();
  },
  methods: {
    async loadData() {
      this.loading = true;
      // await codeLogin(this.mobile, this.msgCode);
      const goods = await getGoods(this.searchKey, this.page);
      for (const item of goods.data.list.data) {
        this.list.push(item);
      }
      if (goods.data.list.current_page === goods.data.list.last_page) {
        this.finished = true;
      } else {
        this.finished = false;
      }
      this.loading = false;
    },
    searchData() {
      this.loadData();
    },
    onLoadData() {
      this.page++;
      this.loadData();
    },
    onRefresh() {
      this.list = [];
      this.page = 1;
      this.finished = false;
      this.loadData();
      this.refreshing = false;
    },
  },
};
</script>

<style></style>
