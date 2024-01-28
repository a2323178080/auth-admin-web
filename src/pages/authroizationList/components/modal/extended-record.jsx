import { useEffect, useState } from 'react'
import { Button, message, Modal, Space, Table, Tag } from 'antd'
import { useHttp } from '@/core/hooks/http/use-http'

export const ExtendedRecord = ({ licenseId, expiredDate, disabled }) => {
	const [catchData, setCatchData] = useState([])
	const http = useHttp()
	const [recordModalOpen, setRecordModalOpen] = useState(false)
	const showRecordModal = async () => {
		setRecordModalOpen(true)
		try {
			const {data} = await http.extendedRecord({
				id: licenseId,
			})
			if (data?.status === true) {
				setCatchData(data.data)
			} else {
				message.error('請求失敗')
			}
		} catch (error) {
			message.error('請求失敗')
		}
	}

	const cancelRecordModal = () => {
		setRecordModalOpen(false)
	}

	const handleRecord = () => {
		cancelRecordModal()
	}

	const columns = [
		{
			title: '原到期日',
			dataIndex: 'previousDate',
			key: 'startDate',
		},
		{
			title: '延長後到期日',
			dataIndex: 'expiredDate',
			key: 'endDate',
		},
		{
			title: '操作時間',
			dataIndex: 'createTime',
			key: 'updateTime',
		},
	]

	return (
		<div>
			<Button
				type="link"
				disabled={disabled}
				onClick={() => {
					return showRecordModal()
				}}
			>
				機房授權延長紀錄
			</Button>
			<Modal
				title={<div className="mt-2 mb-5 ">機房授權延長紀錄</div>}
				open={recordModalOpen}
				onOk={handleRecord}
				onCancel={cancelRecordModal}
				footer={null}
				className="text-center"
				bodyStyle={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				width={470}
			>
				<Table columns={columns} dataSource={catchData} pagination={false} />
			</Modal>
		</div>
	)
}
