import request from "./request"
import {Axios, AxiosPromise} from "axios"
import exp from "constants";
import {Tag} from "ant-design-vue";

interface SendSMS {
	phoneNumbers?: string,
	nonceStr: string,
	sign: string,
}
interface UserInfo {
	phoneNumbers?: string,
	password: string,
	username?: string
}

type Register = {
	phoneNumber: string,
	username: string,
	password: string,
	smsCode: string
}

type Ingredients = {
	ingId?: any,
	ingImg: string,
	ingLabel: string,
}

type TagData = {
	tagId?: number,
	tagName?: string,
	keyword?: string
}

type PageData = {
	pageSize: number,
	pageNo: number
}

const UploadApi = {
	uploadFile: '/admin/upload'
}

const userApi = {
	Login: '/auth/login',
	Logout: '/auth/logout',
	Register: '/auth/register',
	sendSms: '/account/sms',
	UserInfo: '/user/info'
}

const RecipeApi = {
	addIng: '/admin/addIngredient',
	addTag: '/admin/addTag',
	getIng: '/admin/getIngredient',
	getTag: '/admin/queryTag',
	editIng: '/admin/editIngredient',
	editTag: '/admin/editTag',
	searchTag: '/admin/searchTag'
}

export const getSMSCode = (data: SendSMS): AxiosPromise => request({
	url: userApi.sendSms,
	data: data
})

export const login = (data: UserInfo ): AxiosPromise => request({
	url: userApi.Login,
	data: data,
})

export const register = (data: Register): AxiosPromise => request({
	url: userApi.Register,
	data: data,
})

export const getIng = (data: PageData): AxiosPromise => request({
	url: RecipeApi.getIng,
	data: data
})

export const getTag = (data: PageData): AxiosPromise => request({
	url: RecipeApi.getTag,
	data: data
})

export const addIng = (data: Ingredients): AxiosPromise => request({
	url: RecipeApi.addIng,
	data: data
})

export const addTag = (data: TagData): AxiosPromise => request({
	url: RecipeApi.addTag,
	data: data
})

export const editIng = (data: Ingredients): AxiosPromise => request({
	url: RecipeApi.editIng,
	data: data
})

export const searchTag = (data: TagData): AxiosPromise => request({
	url: RecipeApi.searchTag,
	data: data
})

export const editTag = (data: TagData): AxiosPromise => request({
	url: RecipeApi.editTag,
	data: data
})

export const upload = (data:any) => request({
	url: UploadApi.uploadFile,
	data
})

export const getInfo = (): AxiosPromise => request({
	url: userApi.UserInfo,
	method: 'get',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
})