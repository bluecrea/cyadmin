import { post } from "./request"

export const getCookSort = (data) => post({url: 'getCookSort', data: data })
export const getCookIngImg = (data) => post({url: 'getIngImg', data: data})