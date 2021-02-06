/** @format */
import store from '@/store';
export function routerBeforeEachFunc(to, from, next) {
  // 什么时候要请求who接口
  next();
}

export function routerAfterEachFunc(to, from) {}
