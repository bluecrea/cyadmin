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

type Recipes = {
	ingImg: string,
	ingLabel: string,
}

const userApi = {
	Login: '/auth/login',
	Logout: '/auth/logout',
	Register: '/auth/register',
	sendSms: '/account/sms',
	UserInfo: '/user/info'
}

const recipesApi = {
	addIng: '/admin/addIngredient'
}

export const getSMSCode = (data: SendSMS): AxiosPromise => request({
	url: userApi.sendSms,
	data: data
})

export const login = (data: UserInfo ): AxiosPromise => request({
	url: userApi.Login,
	data: data,
	method: 'post'
})

export const register = (data: Register): AxiosPromise => request({
	url: userApi.Register,
	data: data,
})

export const addIng = (data: Recipes): AxiosPromise => request({
	url: recipesApi.addIng,
	data: data,
	method: 'post'
})

export const getInfo = (): AxiosPromise => request({
	url: userApi.UserInfo,
	method: 'get',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
})