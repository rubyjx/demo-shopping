const HISTORY_KEY = "hm_history_list";
const AUTH_USRE = "user";

export const getUserInfo = () => {
  const userInfo = localStorage.getItem(AUTH_USRE);
  return userInfo ? JSON.parse(localStorage.getItem(AUTH_USRE)) : {};
};

export const setUserInfo = (userInfo) => {
  localStorage.setItem(AUTH_USRE, JSON.stringify(userInfo));
};

export const removeUserInfo = () => {
  localStorage.removeItem(AUTH_USRE);
};

// 获取搜索历史
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY);
  return result ? JSON.parse(result) : [];
};

// 设置搜索历史
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr));
};
