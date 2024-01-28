import { useEffect, useState } from 'react'
import { AddAuth } from '@/pages/authroizationList/components/modal/add-auth'
import { AuthsTable } from '@/pages/authroizationList/components/auths-table'
import { useHistory, useParams } from 'react-router-dom'
import { useHttp } from '@/core/hooks/http/use-http'
import { Breadcrumb, Button, Form, message } from 'antd'
import Header from '@/components/header/header'
import { HomeOutlined } from '@ant-design/icons'
import { LinkBreadcrumb } from '@/core/components/layout/component/link-breadcrumb'

export default () => {
	const http = useHttp()
	const history = useHistory()
	//依代理商取得授權列表
	const { id } = useParams()
	const [auths, setAuths] = useState([])
	useEffect(() => {
		getAllAuths()
	}, [])
	const getAllAuths = async () => {
		const { data } = await http.getAllAuths({
			params: {
				agentId: id,
			},
		})
		setAuths(data.data)
	}
	// 新增授權
	const [AddModalOpen, setAddModalOpen] = useState(false)
	const showAddModal = () => {
		setAddModalOpen(true)
	}
	const cancelAddModal = () => {
		setAddModalOpen(false)
	}

	const authroizationListPage = [
		{
			path: '/authroizationList',
			title: <span className="text-sm">機房授權列表</span>
		},
	]

	return (
		<div>
			<LinkBreadcrumb items={authroizationListPage} />
			<Header addButton returnButton title="新增授權" onClick={showAddModal} />
			<AuthsTable auths={auths} getAllAuths={getAllAuths} />
			<AddAuth
				AddModalOpen={AddModalOpen}
				cancelAddModal={cancelAddModal}
				getAllAuths={getAllAuths}
				id={id}
			/>
		</div>
	)
}
