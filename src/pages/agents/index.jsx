import { useEffect, useState } from 'react'
import { useHttp } from '@/core/hooks/http/use-http'
import { Breadcrumb, message } from 'antd'
import { AddAgent } from '@/pages/agents/components/modal/add-agent'
import { AgentsTable } from '@/pages/agents/components/agents-table'
import Header from '@/components/header/header'
import { HomeOutlined } from '@ant-design/icons'
import { LinkBreadcrumb } from '@/core/components/layout/component/link-breadcrumb'

export default () => {
	const http = useHttp()
	const [agents, setAgents] = useState([])
	const [open, setOpen] = useState(false)
	useEffect(() => {
		onGetAgentsData()
	}, [])
	const onGetAgentsData = async () => {
		try {
			const { data } = await http.getAllAgents()
			if (data.status === true) {
				setAgents(
					data.data.map(item => {
						return { ...item, key: item.id }
					}),
				)
			}
		} catch (error) {
			message.error('取得代理商列表失敗')
		}
	}

	return (
		<div>
			<LinkBreadcrumb home />
			<Header addButton title="新增代理商" onClick={() => setOpen(true)} />
			<AddAgent
				open={open}
				onCancel={() => setOpen(false)}
				callBack={onGetAgentsData}
			/>
			<AgentsTable agents={agents} onGetAgentsData={onGetAgentsData} />
		</div>
	)
}
