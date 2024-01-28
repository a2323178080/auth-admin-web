import { AxiosInstance } from 'axios'
import { NO_AUTH } from '@/core/hooks/http/lib'

/**
 * @param instance AxiosInstance
 */
export const injectApis = instance => {
	return {
		login: data => instance.post('/user/login', data, { NO_AUTH }),
		logout: data => instance.post('/user/logout', data, { NO_AUTH }),
		updatePassword: data =>
			instance.put('/user/updatePassword', data, { NO_AUTH }),
		addAgent: data => instance.post('/agent/add', data, { NO_AUTH }),
		editAgent: data => instance.put('/agent/update', data, { NO_AUTH }),
		deleteAgent: data => instance.delete(`/agent/${data.id}`, { NO_AUTH }),
		getAllAgents: data => instance.post('/agent/search', data, { NO_AUTH }),
		addAuth: data => instance.post('/license/add', data, { NO_AUTH }),
		getAllAuths: data => instance.get('/license/searchBy', data, { NO_AUTH }),
		deleteAuth: data =>
			instance.delete(`/license/delete/${data.id}`, { NO_AUTH }),
		ipBind: data => instance.post('/IP/add', data, { NO_AUTH }),
		deleteIp: data => instance.delete(`/IP/delete/${data.id}`, { NO_AUTH }),
		authExtend: data => instance.post('/license/renew', data, { NO_AUTH }),
		extendedRecord: data =>
			instance.get(`/license/record/${data.id}`, { NO_AUTH }),
		download: data =>
			instance.get(`/license/config/download/${data.id}`, { NO_AUTH }),
		getQuantity: data => instance.get(`/license/usage/${data.id}`, { NO_AUTH }),
		usageShopDetail: data =>
			instance.get(`/license/usageShopDetail/${data.id}`, { NO_AUTH }),
		licenseEnableSwitch: data =>
			instance.put('/license/enableSwitch', data, { NO_AUTH }),

		fake: {
			login: ({ username }) =>
				new Promise(res =>
					setTimeout(() => {
						res({
							success: true,
							accessToken: 'nice.guy',
							account: username,
							name: 'frank',
						})
					}, 1000),
				),
			profile: () =>
				new Promise(res =>
					setTimeout(() => {
						res({
							success: true,
							data: {
								account: import.meta.env.VITE_USERNAME,
								name: 'frank',
							},
						})
					}, 1000),
				),
		},
	}
}
