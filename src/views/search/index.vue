<template>
  <div class="search">
    <van-nav-bar title="商品搜索" left-arrow @click-left="back"></van-nav-bar>
    <van-search
      v-model="searchKeyword"
      placeholder="请输入搜索关键词"
      show-action
      autofocus
    >
      <template #action>
        <div class="search-button" @click="searchData(searchKeyword)">搜索</div>
      </template>
    </van-search>
    <!-- 搜索历史 -->
    <div class="search-history" v-if="history.length > 0">
      <div class="title">
        <span>最近搜索</span>
        <van-icon @click="clear" name="delete-o" size="16" />
      </div>
      <div class="list">
        <div
          v-for="item in history"
          :key="item"
          class="list-item"
          @click="searchData(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHistoryList, setHistoryList } from "@/utils/storge";
export default {
  name: "SearchIndex",
  data() {
    return {
      searchKeyword: "",
      history: getHistoryList(),
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    searchData(key) {
      // console.log('进行了搜索，搜索历史要更新', key)
      if (!key) {
        // 跳转到搜索列表页
        this.$router.push(`/searchlist?search=${key}`);
        return;
      }
      const index = this.history.indexOf(key);
      if (index !== -1) {
        this.history.splice(index, 1);
      }
      this.history.unshift(key);
      setHistoryList(this.history);

      // 跳转到搜索列表页
      this.$router.push(`/searchlist?search=${key}`);
    },
    clear() {
      this.history = [];
      setHistoryList([]);
    },
  },
};
</script>

<style scoped lang="less">
.search {
  /deep/ .van-icon-arrow-left {
    color: #333;
  }

  .search-button {
    background-color: #c21401;
    border-radius: 0 8px 8px 0;
    width: 60px;
    text-align: center;
    color: white;
    font-size: 14px;
    margin-right: 10px;
  }

  .title {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 10px;
    gap: 5%;
  }
  .list-item {
    width: 30%;
    text-align: center;
    padding: 7px;
    line-height: 15px;
    border-radius: 50px;
    background: #fff;
    font-size: 13px;
    border: 1px solid #efefef;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }
}
</style>
