import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: !!localStorage.getItem("token"), // 检查 localStorage 是否有 token
  },
  getters: {},
  mutations: {
    login(state, token) {
      state.isAuthenticated = true;
      localStorage.setItem("token", token);
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  actions: {},
  modules: {},
});
