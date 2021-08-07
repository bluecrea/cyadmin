import request from "./request"

type getSMSCode = {
	phone_numbers: string,
	nonce_str: string,
	sign: string
}

export const getSMSCode = (data: getSMSCode) => request({url: 'sendSMSCode', data: data})