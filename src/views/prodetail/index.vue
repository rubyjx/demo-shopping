<template>
  <div class="detail">
    <Header :title="'商品详情页'"></Header>
    <van-swipe @change="onChange" autoplay="3000">
      <van-swipe-item v-for="item in goodImages" :key="item.file_id">
        <img class="detail-image" :src="item.external_url" alt="" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ imageCurrent + 1 }}/{{ goodImages.length }}
        </div>
      </template>
    </van-swipe>
    <div class="title">
      <div class="price">
        <span class="newPrice">¥{{ detail.goods_price_min }}</span>
        <span class="oldPrice">¥{{ detail.goods_price_max }}</span>
      </div>
      <div class="sales-count">
        <span class="sales">已售{{ detail.goods_sales }}件</span>
      </div>
    </div>
    <div class="good-title">
      {{ detail.goods_name }}
    </div>
    <div class="service">
      <div class="left-words">
        <span><van-icon name="passed" />七天无理由退货</span>
        <span><van-icon name="passed" />48小时发货</span>
      </div>
      <div class="right-icon">
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="comment">
      <div class="comment-title">
        <span>商品评价（{{ comments.length }})</span>
        <span class="more">查看更多 <van-icon name="arrow" /></span>
      </div>
      <div class="comment-list">
        <div
          class="comment-item"
          v-for="item in comments"
          :key="item.comment_id"
        >
          <div class="top">
            <img :src="item.user.avatar_url || defaultImg" alt="" />
            <div class="name">{{ item.user.nick_name }}</div>
            <van-rate
              :size="16"
              :value="item.score / 2"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
          </div>
          <div class="content">
            {{ item.content }}
          </div>
          <div class="time">
            {{ item.create_time }}
          </div>
        </div>
      </div>
    </div>
    <div class="good-detail" v-html="detail.content"></div>
    <div class="buy">
      <van-goods-action class="buy-button">
        <van-goods-action-icon
          icon="home-o"
          text="首页"
          @click="$route.push('/home')"
        />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import { getGoodsDetail, getComments } from "@/api/goods";
import defaultImg from "@/assets/default-avatar.png";
export default {
  name: "ProDetail",
  components: { Header },
  data() {
    return {
      goodsId: this.$route.params.id,
      goodImages: [],
      imageCurrent: 0,
      detail: {},
      comments: [],
      page: 1,
      defaultImg,
    };
  },
  async created() {
    const res = await getGoodsDetail(this.goodsId);
    this.goodImages = res.data.detail.goods_images;
    this.detail = res.data.detail;
    const commentRes = await getComments(this.goodsId, this.page);
    this.comments = commentRes.data.list.data.slice(0, 5);
  },
  methods: {
    onChange() {
      if (this.imageCurrent >= this.goodImages.length - 1) {
        this.imageCurrent = 0;
      } else {
        this.imageCurrent++;
      }
    },
  },
};
</script>

<style scoped lang="less">
.detail {
  .detail-image {
    width: 100%;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price {
      .newPrice {
        padding: 10px;
        color: red;
        font-size: 20px;
      }
      .oldPrice {
        font-size: 16px;
        color: #959595;
        text-decoration: line-through;
      }
    }
    .sales-count {
      font-size: 16px;
      .sales {
        padding: 10px;
        color: #959595;
        font-weight: 500;
      }
    }
  }
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}

.service {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  margin-top: 10px;
  font-size: 16px;
  background-color: #fafafa;
  .left-words {
    span {
      margin-right: 10px;
    }
    .van-icon {
      margin-right: 4px;
      color: #fa2209;
    }
  }
}

.comment {
  width: 100%;
  .comment-title {
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    .more {
      color: #959595;
      font-size: 14px;
    }
  }
  .comment-item {
    font-size: 16px;
    line-height: 30px;
    .top {
      height: 30px;
      display: flex;
      align-items: center;
      margin-top: 20px;
      img {
        width: 20px;
        height: 20px;
      }
      .name {
        margin: 0 10px;
      }
    }
    .time {
      color: #999;
    }
  }
}
.buy-button {
  position: fixed;
  width: 100%;
}
</style>
