import { Space, Table } from 'antd'
import { Link } from 'react-router-dom'
import { EditAgent } from '@/pages/agents/components/modal/edit-agent'
import { DeleteAgent } from '@/pages/agents/components/modal/delete-agent'

export const AgentsTable = ({ agents, onGetAgentsData }) => {
	const screenHeight = window.innerHeight *0.6;
	const { Column } = Table

	const columns = [
		{
			title: '代理商名稱',
			dataIndex: 'name',
			key: 'agents',
		},
		{
			title: '機房授權數量',
			dataIndex: 'licenseCount',
			key: 'licenseCount',
		},
		{
			title: 'IP綁定總數',
			dataIndex: 'licenseIpCount',
			key: 'licenseIpCount',
		},
		{
			title: '操作',
			dataIndex: 'id',
			key: 'id',
			render: (text, record) => {
				return (
					<Space size="middle">
						<Link
							to={`/authroizationList/${record.id}`}
							className="text-blue-400"
						>
							機房授權列表
						</Link>

						<EditAgent
							onGetAgentsData={onGetAgentsData}
							agentId={record.id}
							agentName={record.name}
						/>
						<DeleteAgent
							onGetAgentsData={onGetAgentsData}
							agentId={record.id}
							agentName={record.name}
						/>
					</Space>
				)
			},
		},
	]

	const columnWidth = `${100 / columns.length}%`
	columns.forEach(column => {
		column.width = columnWidth
	})

	return (
		<div>
			<Table
				dataSource={agents}
				columns={columns}
				pagination={false}
				scroll={{ y: screenHeight }}
			></Table>
		</div>
	)
}
