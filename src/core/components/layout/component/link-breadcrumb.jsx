import { Breadcrumb } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { HomeOutlined } from '@ant-design/icons'

export const LinkBreadcrumb = ({ items = [], home }) => {
	const history = useHistory()

	const goback = () => {
		history.goBack()
	}

	const gotoAgents = () => {
		history.push('/agents')
	}

	const initialItems = [
		{
			path: '/agents',
			title: (
				<>
					<span>
						{home && <HomeOutlined style={{ fontSize: '20px',marginRight:'8px' }} />}<span className="text-sm">總覽</span>
					</span>
				</>
			),
		},
		...items,
	]

	function itemRender(item, params, items, paths) {
		const last = items.indexOf(item) === items.length - 1

		if (last) {
			return <span> {item.title}</span>
		} else if (item.path === '/agents') {
			return (
				<span onClick={gotoAgents} className="cursor-pointer">
					<HomeOutlined style={{ fontSize: '20px' ,marginRight:'8px'}} />
					<span>{item.title}</span>
				</span>
			)
		} else if (item.path === '/authroizationList') {
			return (
				<span onClick={goback} className="cursor-pointer">
					{item.title}
				</span>
			)
		}

		return <Link to={item.path}>{item.title}</Link>
	}

	return (
		<div>
			<Breadcrumb
				itemRender={itemRender}
				items={initialItems}
				className="text-lg mt-5 mb-5 ml-5"
			/>
		</div>
	)
}
