import request from "./request"
import {AxiosPromise} from "axios";

type SendSMS = {
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
	smsCode: string,
	gender: number
}

const userApi = {
	Login: '/auth/login',
	Logout: '/auth/logout',
	Register: '/auth/register',
	SendSms: '/account/sms',
	UserInfo: '/user/info'
}


export const getSMSCode = (data: SendSMS): AxiosPromise => request({
	url: userApi.SendSms,
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

export const getInfo = (): AxiosPromise => request({
	url: userApi.UserInfo,
	method: 'get',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
})