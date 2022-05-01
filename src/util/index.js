let _debounceTimeout = null,
    _throttleRunning = false;

/**
 * 防抖
 * @param {Function} 执行函数
 * @param {Number} delay 延时ms   
 */
export const debounce = (fn, delay = 500) => {
    clearTimeout(_debounceTimeout);
    _debounceTimeout = setTimeout(() => {
        fn();
    }, delay);
};
/**
 * 节流
 * @param {Function} 执行函数
 * @param {Number} delay 延时ms  
 */
export const throttle = (fn, delay = 500) => {
    if (_throttleRunning) {
        return;
    }
    _throttleRunning = true;
    fn();
    setTimeout(() => {
        _throttleRunning = false;
    }, delay);
};

/**
 * 加载完成
 * @param timeout {Number} 超时时间 / 单位：秒
 * @return {Promise<Boolean>} document is loaded? 
 */
export function windowLoaded(timeout = 90) {
    let loaded, loadFail;
    const status = new Promise((resolve, reject) => {
        loaded = resolve;
        loadFail = reject;
    });
    if (document.readyState === "complete") {
        loaded("complete");
    } else {
        window.addEventListener("load", () => loaded("load"));
    }
    // 超过 timeout 秒后加载失败
    setTimeout(() => loadFail("timeout"), timeout * 1000);
    return status;
}