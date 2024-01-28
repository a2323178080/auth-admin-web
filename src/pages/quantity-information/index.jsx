import { useParams } from 'react-router-dom'
import Header from '@/components/header/header'
import QuantityTable from '@/pages/quantity-information/component/quantity-table'
import { Breadcrumb, Button } from 'antd'
import { HomeOutlined, RollbackOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { LinkBreadcrumb } from '@/core/components/layout/component/link-breadcrumb'

export default () => {
	const { id } = useParams()
	const history = useHistory()
	const quantityInformationPage = [
		{
			path: `/authroizationList`,
			title: <span className="text-sm">機房授權列表</span>,
		},
		{
			path: '/quantityInformation',
			title: <span className="text-sm">數量詳情</span>,
		},
	]

	return (
		<div>
			<LinkBreadcrumb items={quantityInformationPage} />
			<Header returnButton title="新增授權" />
			<div>
				<QuantityTable id={id} />
			</div>
		</div>
	)
}
