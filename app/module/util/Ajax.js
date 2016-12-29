import $ from 'jquery'
/*
 * 发送post请求
 *
 * @url : 请求的地址，可以带get参数
 *
 * @postData : 发送的数据，JSON格式
 *
 * @callback(re, success) : 返回函数，带一个参数，即服务器的输出字符，必须为json格式
 *		@re 		: 返回数据
 *		@success 	: 是否处理成功，一般success=true时才去处理re的数据
 *
 * @options : ajax请求参数
 *  @param {Boolean} quiet : true/false,		//是否展示错误信息
 *
 * @properties : 方法属性
 * 	{
 * 		quiet : true/false,		//是否展示错误信息
 * 	}
 *
 */
export const post = (url, postData, callback, options)=> {
  return request(url, postData, callback, $.extend({ type: 'POST' }, options))
}

export const get = (url, postData, callback, options)=> {
  return request(url, postData, callback, $.extend({ type: 'GET' }, options))
}

const request = (url, postData, callback, options)=> {
  let { quiet, ..._options } = options || { quiet: false }
  if(!_options.dataType) {
    _options.dataType = 'json'
  }
  _options = $.extend(
    {
      url: url? url : (window.location.href + ''),

      success: (re)=>{
        if(typeof re.error === 'undefined') {
          if(callback)
            callback(re, true)
          return
        }
        re.error = parseInt(re.error || '0')
        if(re.error === 10) {
          if(!quiet) {
            //保存cookie，Cookie的读取在后台，比如微信登录成功以后
            // cookie.set('loginPreUrl', encodeURIComponent(window.location.href), {expires : 1, path : '/'})
            // Global.platformApi.unloginDeal()
          }else {
            if(callback)
              callback(re, false)
          }
          return
        }
        if(re.error) {
          if(!quiet) {
            $.toast(re.message)
          }
          if(callback)
            callback(re, false)
          return
        }
        if(callback)
          callback(re, true)
      },
      data : postData,
      error : (request, error, message) => {

        if(!quiet) {
          $.toast('请求失败:'+message)
        }
        if(callback)
          callback({ error : 1, result : '请求失败' }, false)
      }

    },
    _options
  )
  $.ajax(_options)
}

export default { post, get }
