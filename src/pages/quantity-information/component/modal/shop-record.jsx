import { useState } from 'react'
import { Button, message, Modal, Space, Table, Tag } from 'antd'
import { useHttp } from '@/core/hooks/http/use-http'
import { useTranslation } from 'react-i18next'

export const ShopRecord = ({ shopName, shopId }) => {

	const { t } = useTranslation()
	const [catchData, setCatchData] = useState([])

	const http = useHttp()
	const [shopRecordModalOpen, setShopRecordModalOpen] = useState(false)

	const showShopRecordModal = async () => {
		setShopRecordModalOpen(true)
		try {
			const {data} = await http.usageShopDetail({
				id: shopId,
			})
			if (data?.status === true) {
				setCatchData(data.data)
			} else {
				message.error(data.message)
			}
		} catch (error) {
			message.error(data.message)
		}
	}

	const cancelShopRecordModal = () => {
		setShopRecordModalOpen(false)
	}

	const handleShopRecord = () => {
		cancelShopRecordModal()
	}

	const columns = [
		{
			title: '啟用狀態',
			dataIndex: 'status',
			key: 'status',
			render: status => {
				return t(status)
			},
			align: 'center',
		},
		{
			title: '起始日',
			dataIndex: 'startDate',
			key: 'startDate',
			align: 'center',
		},
		{
			title: '到期日',
			dataIndex: 'expiredDate',
			key: 'expiredDate',
			align: 'center',
		},
		{
			title: '授權模組',
			dataIndex: 'permitModuleList',
			key: 'permitModuleList',
			render:(text,record)=>{
				return(
					<span>
          {text.map((item, index) => (
						<span key={index}>
              {item.moduleName}
							{index < text.length - 1 && '、'}
            </span>
					))}
        </span>
				)
			},
			align: 'center',
		},
	]

	return (
		<div>
			{shopName==="-"?"-":<Button
				className="whitespace-pre-line"
				type="link"
				onClick={() => {
					return showShopRecordModal()
				}}
			>
				{shopName}
			</Button>}

			<Modal
				title={<div className="mt-2 mb-5 ">起始日及到期日</div>}
				open={shopRecordModalOpen}
				onOk={handleShopRecord}
				onCancel={cancelShopRecordModal}
				footer={null}
				className="text-center"
				bodyStyle={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				width={670}
			>
				<Table columns={columns} dataSource={catchData} pagination={false} />
			</Modal>
		</div>
	)
}
