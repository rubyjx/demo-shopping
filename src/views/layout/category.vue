<template>
  <div class="category">
    <Header :title="'全部分类'" :leftButtonShow="false"></Header>
    <van-search class="search" v-model="value" placeholder="请输入搜索关键词" />
    <div class="body">
      <div class="left">
        <ul class="list">
          <li
            :class="{ item: true, active: index === activeIndex }"
            v-for="(category, index) in categoryList"
            :key="category.category_id"
            @click="getChildCategory(index, category)"
          >
            {{ category.name }}
          </li>
        </ul>
      </div>
      <div class="right">
        <span
          class="children"
          v-for="item in chiledList"
          :key="item.category_id"
          @click="$router.push(`/searchlist?categoryId=${item.category_id}`)"
        >
          <img :src="item.image.preview_url" />
          <div class="title">{{ item.name }}</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import { getCategory } from "@/api/category";
export default {
  name: "CategoryIndex",
  components: { Header },
  data() {
    return {
      value: "",
      categoryList: [],
      goodsList: [],
      chiledList: [],
      activeIndex: 0,
    };
  },
  async created() {
    const res = await getCategory();
    this.categoryList = res.data.list;
    this.chiledList = this.categoryList[this.activeIndex].children;
  },
  methods: {
    getChildCategory(index, category) {
      this.activeIndex = index;
      this.chiledList = category.children;
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  background-color: rgb(241, 241, 242);
}
.category {
  .body {
    display: flex;
    .left {
      width: 85px;
      height: 100%;
      background-color: #f3f3f3;
      overflow: auto;
      .list {
        display: flex;
        flex-direction: column;
        .item {
          padding: 10px;
          background-color: rgb(241, 241, 242);
        }
        .active {
          background-color: white;
          color: red;
        }
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-start;
      .children {
        padding: 10px;
        text-align: center;
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
}
</style>
