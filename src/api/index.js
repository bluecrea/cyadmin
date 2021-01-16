import { post } from "./request"

export const getCookSort = (data) => post({url: 'getCookSort', data: data })
export const getCookIngImg = (data) => post({url: 'getIngImg', data: data})
export const uploadImg = (formData) => post({url: 'admin/uploadCookImg', data: formData})
export const addRecipe = (data) => post({url: 'admin/setRecipes', data: data})
export const queryCookbookList = (data) => post({ url: 'admin/queryRecipes', data: data})