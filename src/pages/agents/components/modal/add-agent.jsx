import { message, Form, Input, Modal } from 'antd'
import { useHttp } from '@/core/hooks/http/use-http'

export const AddAgent = ({ open, onCancel, callBack }) => {
	const [form] = Form.useForm()
	const http = useHttp()
	const onFinish = () => {
		form
			.validateFields()
			.then(async values => {
					try {
						const { data } = await http.addAgent(values)
						if (data?.status === true) {
							callBack()
							onCancel()
							message.success(data.message)
						}
					} catch (error) {
						message.error(data.message)
					}

			})
			.catch(info => {
				message.error(data.message)
			})
	}

	return (
		<div>
			<Modal
				destroyOnClose={true}
				closeIcon={false}
				keyboard
				title={<div className="mt-2 mb-5 ">新增代理商</div>}
				open={open}
				onOk={form.submit}
				onCancel={onCancel}
				className="text-center"
				bodyStyle={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '60px',
				}}
				width={470}
			>
				<Form
					form={form}
					preserve={false}
					name="basic"
					onFinish={onFinish}
					initialValues={{
						remember: true,
					}}
					autoComplete="off"
				>
					<Form.Item
						label="代理商名稱"
						name="name"
						rules={[
							{
								required: true,
								message: '請輸入代理商名稱',
							},
						]}
						colon={false}
					>
						<Input className="w-50" />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	)
}
