import request from "@/utils/request";
// 商品搜索
export const getGoods = (
  goodsName,
  pageNum,
  sortType,
  sortPrice,
  categoryId
) => {
  return request.get("/goods/list", {
    params: {
      sortType: sortType,
      goodsName: goodsName,
      page: pageNum,
      sortPrice: sortPrice,
      categoryId: categoryId,
    },
  });
};

export const getGoodsDetail = (goodsId) => {
  return request.get("/goods/detail", {
    params: {
      goodsId: goodsId,
    },
  });
};

export const getComments = (goodsId, page) => {
  return request.get("/comment/list", {
    params: {
      scoreType: -1,
      goodsId: goodsId,
      page: page,
    },
  });
};
