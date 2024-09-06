import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {
    isLogin(state) {
      return state.user.userInfo.token;
    },
  },
  actions: {},
  modules: {
    user,
  },
});
