import request from "@/utils/request";
// 商品搜索
export const getGoods = (goodsName, pageNum) => {
  return request.get("/goods/list", {
    params: {
      sortType: "all",
      goodsName: goodsName,
      page: pageNum,
    },
  });
};
