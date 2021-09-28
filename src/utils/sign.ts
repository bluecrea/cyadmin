import { Md5 } from 'ts-md5/dist/md5'

export const signStr = (params: Record<string, unknown>): string => {
	// 删除空值
	for (const prop in params) {
		if (params[prop] === '') {
			delete params[prop]
		}
	}
	// 升序排列
	const arr: string[] = []
	for (const i in params) {
		arr.push(i + '=' + params[i])
	}
	const urlStr = arr.toString().split(',').sort().join('&')
	return Md5.hashStr(urlStr + '&key=Wky9F3JmbK').toUpperCase()
}