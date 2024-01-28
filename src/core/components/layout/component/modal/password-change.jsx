import { useState } from 'react'
import { Button, Form, Input, message, Modal } from 'antd'
import { useHttp } from '@/core/hooks/http/use-http'

export const PasswordChange = () => {
	const [form] = Form.useForm()

	const http = useHttp()
	const [passwordChangeModalOpen, setPasswordChangeModalOpen] = useState(false)
	const showPasswordChangeModal = () => {
		setPasswordChangeModalOpen(true)
	}
	const cancelPasswordChangeModal = () => {
		setPasswordChangeModalOpen(false)
	}

	const onFinish = () => {
		form
			.validateFields()
			.then(values => {
				;(async () => {
					try {
						const { data } = await http.updatePassword(values)
						if (data?.status === true) {
							cancelPasswordChangeModal()
							message.success(data.message)
						}
					} catch (error) {
						message.error(data.message)
					}
				})()
			})
			.catch(info => {
				message.error('變更失敗')
			})
	}

	const checkPasswordMatch = (rule, value) => {
		const newPassword = form.getFieldValue('password')
		if (value !== newPassword) {
			return Promise.reject('新密碼與確認新密碼不一致')
		} else {
			return Promise.resolve()
		}
	}

	return (
		<div>
			<Button
				type="link"
				onClick={() => {
					return showPasswordChangeModal()
				}}
			>
				登入密碼變更
			</Button>
			<Modal
				destroyOnClose={true}
				closeIcon={false}
				keyboard
				title="登入密碼變更"
				open={passwordChangeModalOpen}
				onCancel={cancelPasswordChangeModal}
				onOk={form.submit}
			>
				<Form
					form={form}
					preserve={false}
					name="basic"
					onFinish={onFinish}
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 10,
					}}
					initialValues={{
						remember: true,
					}}
					autoComplete="off"
				>
					<Form.Item
						label="舊密碼"
						name="oldPassword"
						rules={[
							{
								required: true,
								message: '請輸入舊密碼',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="新密碼"
						name="password"
						rules={[
							{
								required: true,
								message: '請輸入新密碼',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="確認新密碼"
						name="checkPassword"
						rules={[
							{
								required: true,
								message: '請輸入確認新密碼',
							},
							{
								validator: checkPasswordMatch,
							},
						]}
					>
						<Input />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	)
}
