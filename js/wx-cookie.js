/**
 * create by xiong.wang
 */

(function(root, factory) {
  if (typeof module === 'object' && typeof exports === 'object') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define([], factory)
  } else if (typeof exports === 'object') {
    exports['wxCookies'] = factory()
  } else {
    root['wxCookies'] = factory()
  }
}(this, function() {

  const wxCookies = function() {

    return {
      hasItem(sKey) {
        return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=')).test(document.cookie)
      },

      // 支持单个和多个查询
      getItem: function() {
        const args = arguments.length
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + arguments[0] + ')=([^;]*)'))

        const value = decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(arguments[0]).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
        console.log(value)
        if (!args) {
          throw Error('参数不能为空')
        }

        if (args === 1) {
          if (this.hasItem(arguments[0])) {
            return (match ? decodeURIComponent(match[3]) : null)
          }
          throw Error(arguments[0] + '参数不存在cookie中')
        }

        const cookies = {}
        for (let i = 0; i < args; i++) {
          let arg = arguments[i]

          if (this.hasItem(arg)) {
            const reg = new RegExp('(^|;\\s*)(' + arg + ')=([^;]*)')
            const match = document.cookie.match(reg)

            cookies[arg] = (match ? decodeURIComponent(match[3]) : null)
          } else {
            throw Error(arg + '参数不存在cookie中')
          }
        }

        return cookies
      },

      // 支持单个或多个一起设置
      setItem: function() {

      }
    }

  }

  return wxCookies()
}))
