import { getUserInfo, setUserInfo } from "@/utils/storge";

export default {
  namespaced: true,
  state: {
    userInfo: getUserInfo(),
  },
  mutations: {
    setUser(state, userInfo) {
      state.userInfo = userInfo;
      setUserInfo(userInfo);
    },
  },
};
