// src/mocks/browser.js
import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';

const worker = setupWorker(...handlers);

export const startWorker = async () => {
  await worker.start({
    /** 在瀏覽器的控制台中禁用匹配請求的日誌記錄 */
    quiet: true,
    /** 指定如何處理請求處理程序中未列出的請求 */
    onUnhandledRequest: 'bypass'
  });
};
