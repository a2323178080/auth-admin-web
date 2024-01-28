import { Avatar, Button } from 'antd'
import { LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons'
import { useLayout } from '@/core/components/layout/service'
import { useAuth } from '@/core/hooks/use-auth'
import { AdminDropdown } from '@/core/components/layout/component/admin-dropdown'

export const Header = () => {
	const setMenuCollapsed = useLayout(e => e.setMenuCollapsed)
	const auth = useAuth(e => e.auth)
	const logout = useAuth(e => e.logout)
	const onToggleCollapsed = () => setMenuCollapsed(e => !e)

	return (
		<div className="flex justify-between items-center py-4 px-2 shadow-md relative bg-sky-100">
			<div className="pl-5 ">{import.meta.env.VITE_COMMON_APP_TITLE}</div>
			<div>
				<AdminDropdown />
			</div>
		</div>
	)
}
