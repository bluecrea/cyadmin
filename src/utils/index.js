import md5 from 'js-md5'

// 签名
export const sign = (params) => {
  let arr = []
  let content
  for (let prop in params) {
    if (params[prop] === '') {
      delete params[prop]
    }
    arr.push((prop + "=" + params[prop]))
  }
  content = arr.join('&')

  let urlStr = content.split('&').sort().join('&')
  let md5String = md5(urlStr + '&key=Wky9F3JmbK')
  return md5String.toUpperCase()
}