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
