// src/mocks/handlers.ts
import { http, passthrough, HttpResponse } from 'msw'
import { get } from 'idb-keyval'

const base_api = import.meta.env.VITE_BASE_API

// 判斷是否應繼續使用假資料
function shouldUseMockData(mode: string): boolean {
  return mode === 'test';
}

/** 假資料處理 */
async function baseResolver({ request }: { request: Request }) {
  try {
    const newPost = await request.json()
    const { mode } = newPost
  
    // 若請求參數mode不為test，則不取假資料
    if (!shouldUseMockData(mode)) {
      return passthrough();
    }
  
    // 從 IndexedDB 取得假資料
    const data = await get(request.url);
    if (!data) {
      throw new Error('Mock data not found');
    }
  
    // 回應假資料
    return HttpResponse.json(data)
  } catch (error) {
    console.error('Error in baseResolver:', error);
    return HttpResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

/** 模擬API傳出的請求，並設定API模擬回應 */
export const handlers = [
  http.post(`${base_api}/userDetail`, baseResolver)
  // 根據需要增加更多的 API 模擬請求
]