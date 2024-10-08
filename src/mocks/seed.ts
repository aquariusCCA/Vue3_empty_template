import { setMany } from 'idb-keyval'
import { userDetail } from './json/testData.json'

const base_api = import.meta.env.VITE_BASE_API

/** 注入假資料 */
export const setSeeds = async () => {
  try {
    await setMany([
      // 這裡設定假資料 json mapping
      // [url, json key]
      [`${base_api}/userDetail`, userDetail]
    ])
  } catch (err) {
    console.log(err)
  }
}