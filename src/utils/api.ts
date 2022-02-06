import request from "./request"
import {Axios, AxiosPromise} from "axios"

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

type PageData = {
	pageSize: number,
	pageNo: number
}

const userApi = {
	Login: '/auth/login',
	Logout: '/auth/logout',
	Register: '/auth/register',
	sendSms: '/account/sms',
	UserInfo: '/user/info'
}

const IngApi = {
	addIng: '/admin/addIngredient',
	getIng: '/admin/getIngredient',
	editIng: '/admin/editIngredient'
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
	url: IngApi.getIng,
	data: data
})

export const addIng = (data: Ingredients): AxiosPromise => request({
	url: IngApi.addIng,
	data: data,
})

export const editIng = (data: Ingredients): AxiosPromise => request({
	url: IngApi.editIng,
	data: data
})

export const upload = (data:any) => request({
	url: 'https://api.xiachuyi.com/admin/upload',
	data
})

export const getInfo = (): AxiosPromise => request({
	url: userApi.UserInfo,
	method: 'get',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
})