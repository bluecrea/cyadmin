import md5 from 'js-md5'

export const strToArrObj = (str) => {
  let arr = str.split(';')
  let arrList = []
  arr.pop()
  arr.forEach((item) => {
    const title = item.split(':')[0];
    const value = item.split(':')[1];
    let obj = { title, value }
    arrList.push(obj)
  })
  return arrList
}

// 签名
export const sign = (params) => {
  function removePropTty(obj) {
    for (let prop in obj) {
      if (obj[prop] === '') {
        delete obj[prop]
      }
    }
  }
  removePropTty(params) //删除空属性值

  function paramsStrSort(paramsStr) {
    let urlStr = paramsStr.split('&').sort().join('&');
    let md5String = urlStr + '&key=Wky9F3JmbK';
    return md5(md5String)
  }

  function getSign(obj) {
    if (typeof obj === 'string') {
      return paramsStrSort(obj);
    } else if (typeof obj === 'object') {
      let arr = [];
      for (let i in obj) {
        arr.push(i + '=' + obj[i]);
      }
      return paramsStrSort(arr.join('&'))
    }
  }
  let sign = getSign(params);
  params.sign = sign;
  return sign.toUpperCase();
}