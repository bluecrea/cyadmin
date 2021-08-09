import request from "./request"

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

const userApi = {
	Login: '/auth/login',
	Logout: '/auth/logout',
	Register: '/auth/register',
	SendSms: '/account/sms',
	UserInfo: '/user/info'
}

export const getSMSCode = (data: SendSMS) => request({
	url: userApi.SendSms,
	data: data
})

export const login = (data: UserInfo ) => request({
	url: userApi.SendSms,
	data: data
})

export const getInfo = () => request({
	url: userApi.UserInfo,
	method: 'get',
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
})