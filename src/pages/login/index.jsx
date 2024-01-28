import { Button, Form, Input, message } from 'antd'
import {
	EyeInvisibleOutlined,
	EyeTwoTone,
	SyncOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '@/core/hooks/use-auth'
import { useHttp } from '@/core/hooks/http/use-http'
import { useLoading } from '@yoimu/react-common-lib'
import { Captcha } from '@/pages/login/components/vertification-code/captcha'
import { useEffect } from 'react'

const initialUsername = import.meta.env.VITE_USERNAME
const initialPassword = import.meta.env.VITE_PASSWORD

export default () => {
	const history = useHistory()
	const http = useHttp()
	const { loading: confirmLoading, useLoadingCall: useConfirmLoadingCall } =
		useLoading()

	const [showCaptcha, setShowCaptcha] = useState(false)

	useEffect(() => {
		const storedShowCaptcha = localStorage.getItem('captcha')
		if (storedShowCaptcha !== null) {
			setShowCaptcha(storedShowCaptcha)
		}
	}, [])

	const onFinish = async value => {
		history.push('/agents')
		const { data } = await http.login(value)
		if (data?.status === true) {
			message.success(data.message)
			history.push('/agents')
			localStorage.removeItem('captcha')
		} else if (data?.status !== true && data?.captcha === true) {
			setShowCaptcha(true)
			localStorage.setItem('captcha', showCaptcha.toString())
		}
	}

	return (
		<>
			<div className="text-lg font-bold mb-4 text-center">Shoperlink授權管理</div>
			<Form name={'login-form'} onFinish={onFinish}>
				<Form.Item
					name="username"
					// initialValue={initialUsername}
					rules={[{ required: true,message: '請輸入使用者帳號',}]}
					validateTrigger={['onChange', 'onBlur']}
				>
					<Input placeholder="使用者帳號" />
				</Form.Item>
				<Form.Item
					name="password"
					// initialValue={initialPassword}
					rules={[{ required: true,message: '請輸入使用者密碼' }]}
					validateTrigger={['onChange', 'onBlur']}
				>
					<Input.Password
						iconRender={visible =>
							visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
						}
						placeholder="使用者密碼"
					/>
				</Form.Item>

				{showCaptcha && (
					<Form.Item name="captcha">
						<Captcha />
					</Form.Item>
				)}

				<div className="text-center">
					<Button type="primary" htmlType="submit" loading={confirmLoading}>
						登入系統
					</Button>
				</div>
			</Form>
		</>
	)
}
