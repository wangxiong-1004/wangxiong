let needLoadingRequestCount = 0

/**
 * 开启加载loading
 * @method startLoading
 * @param { String } loadingText loading文本
 * @returns { * }
 */
function startLoading() {
  // Indicator.open({
  //     text: loadingText || '拼命加载...',
  //     spinnerType: 'triple-bounce'
  // });
}

/**
 * 关闭加载loading
 * @method endLoading
 * @returns { * }
 */
function endLoading() {
  // Indicator.close();
}

export default {
  /**
   * 显示全屏loading动画
   * @method showFullScreenLoading
   * @param { String } loadingText loading显示文字
   * @returns { * }
   */
  showFullScreenLoading(loadingText) {
    if (needLoadingRequestCount === 0) {
      startLoading(loadingText)
    }

    needLoadingRequestCount += 1
  },
  /**
   * 关闭全屏loading动画
   * @method tryHideFullScreenLoading
   * @returns { * }
   */
  tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) {
      return
    }

    needLoadingRequestCount -= 1

    if (needLoadingRequestCount === 0) {
      endLoading()
      // _.debounce(tryCloseLoading, 300)()
    }
  }
}
