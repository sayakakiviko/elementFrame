/** @format */
import tokenUtil from '../../utils/tokenUtil';
import Vue from 'vue';
import axios from 'axios';
import router from '@/router';
export default {
  state: {
    name: 'goudan',
    user: {}
  },
  getters: {
    changeName(state) {
      return state.name + ' good';
    }
  },
  mutations: {
    // SET_USERINFO(states, user) {
    //   states.user = { ...states.user, ...user };
    // }
  },
  actions: {
    // getUserInfo({ commit, state }, params) {
    //   return {};
    // }
  }
};
