import { DownOutlined, SmileOutlined } from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons'
import { Dropdown, Space, Button, Avatar, message } from 'antd'
import { useHttp } from '@/core/hooks/http/use-http'
import { useHistory } from 'react-router-dom'
import { PasswordChange } from '@/core/components/layout/component/modal/password-change'
import { useState } from 'react'

export const AdminDropdown = () => {
	const http = useHttp()
	const history = useHistory()

	const logout = async () => {
		try {
			const {data} = await http.logout()
			if (data?.status === true) {
				message.success(data.message)
				history.replace('/login')
			} else {
				message.error(data.message)
			}
		} catch (error) {
			message.error(data.message)
		}
	}
	const items = [
		{
			key: '1',
			label: <PasswordChange />,
		},
		{
			key: '2',
			label: (
				<Button type="text" onClick={logout}>
					登出系統
				</Button>
			),
		},
	]

	return (
		<div>
			<Dropdown
				className="pr-5"
				menu={{
					items,
				}}
				trigger={['click']}
			>
				<a onClick={e => e.preventDefault()} className="cursor-pointer">
					<Space>
						<Avatar size="small" icon={<UserOutlined />} />
						Admin
					</Space>
				</a>
			</Dropdown>
		</div>
	)
}
