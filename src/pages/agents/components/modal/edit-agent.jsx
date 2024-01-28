import { Button, Form, Input, message, Modal } from 'antd'
import { useHttp } from '@/core/hooks/http/use-http'
import { useState } from 'react'

export const EditAgent = ({ onGetAgentsData, agentId, agentName }) => {
	const [form] = Form.useForm()
	const http = useHttp()
	const [editAgentModalOpen, setEditAgentModalOpen] = useState(false)

	const showEditAgentModal = () => {
		setEditAgentModalOpen(true)
	}
	const cancelEditAgentModal = () => {
		setEditAgentModalOpen(false)
	}
	const handleEditAgent = () => {
		form
			.validateFields()
			.then(async values => {
				const newValues = {
					...values,
					id: agentId,
				}

				try {
					const { data } = await http.editAgent(newValues)
					if (data?.status === true) {
						onGetAgentsData()
						cancelEditAgentModal()
						message.success(data.message)
					} else {
						message.error(data.message)
					}
				} catch (error) {
					message.error(data.message)
				}
			})
			.catch(info => {
				console.log('Validate Failed:', info)
			})
	}

	return (
		<div>
			<Button
				type="link"
				onClick={() => {
					return showEditAgentModal()
				}}
			>
				編輯
			</Button>
			<Modal
				title={<div className="mt-2 mb-5 ">編輯代理商</div>}
				open={editAgentModalOpen}
				closeIcon={false}
				destroyOnClose={true}
				onOk={form.submit}
				onCancel={cancelEditAgentModal}
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
					onFinish={handleEditAgent}
					name="basic"
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
						<Input className="w-50" defaultValue={agentName} />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	)
}
