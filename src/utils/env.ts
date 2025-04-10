// 判断是否在浏览器环境
export const isBrowser = () => typeof window !== 'undefined' && window;

// 安全访问浏览器 API
// eslint-disable-next-line no-unused-vars
export const safeWindow = <T>(fn: (win: Window) => T): T | undefined => {
  if (isBrowser()) return fn(window)
  return undefined
}
