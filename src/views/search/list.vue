<template>
  <div class="goods">
    <van-nav-bar
      left-arrow
      title="商品列表"
      @click-left="$router.go(-1)"
    ></van-nav-bar>
    <van-search
      v-model="searchKey"
      placeholder="请输入搜索关键词"
      show-action
      readonly
      @click="$router.push('/search')"
      class="search-box"
    >
      <template #action>
        <van-icon name="apps-o" class="tool" @click="searchData()"></van-icon>
      </template>
    </van-search>
    <van-row class="search-sort">
      <van-col span="8">综合</van-col>
      <van-col span="8" @click="sortData('sales')">销量</van-col>
      <van-col span="8" @click="sortData('price')">价格</van-col>
    </van-row>
    <div class="good-list">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="我是有底线的"
        @load="onLoadData"
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
      sortType: "all",
      sortDirection: true,
      categoryId: this.$route.query.categoryId,
    };
  },
  async created() {
    this.searchKey = this.$route.query.search;
    this.list = [];
    this.page = 1;
    this.sortType = "all";
    this.sortDirection = true;
    this.loadData();
  },
  methods: {
    async loadData() {
      // this.loading = true;
      const goods = await getGoods(
        this.searchKey,
        this.page,
        this.sortType,
        this.sortDirection ? 0 : 1,
        this.categoryId
      );
      for (const item of goods.data.list.data) {
        this.list.push(item);
      }
      if (goods.data.list.current_page >= goods.data.list.last_page) {
        this.finished = true;
      } else {
        this.finished = false;
      }
      this.loading = false;
    },

    sortData(sortType) {
      this.sortType = sortType;
      this.sortDirection = !this.sortDirection;
      this.list = [];
      this.page = 1;
      this.finished = false;
      this.loadData();
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

<style scoped lang="less">
.search-sort {
  display: flex;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  line-height: 36px;

  .van-col {
    text-align: center;
    flex: 1;
  }
}

.search-box {
  .tool {
    font-size: 24px;
    height: 40px;
    line-height: 40px;
  }
}
/deep/ .van-nav-bar .van-icon {
  color: #333;
}
</style>
