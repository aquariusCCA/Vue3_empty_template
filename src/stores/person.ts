import { defineStore } from 'pinia'

// 選項式
export const usePersonStore = defineStore('person', {
  state: () => {
    return {
      name: 'kevin',
      age: 27,
      sex: '男',
      address: '台北'
    }
  },
  persist: {
    // CONFIG OPTIONS HERE
    pick: ['name', 'age'], //指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state
    key: 'piniaStore', //存储名称
    storage: sessionStorage, // 存储方式
  },
})