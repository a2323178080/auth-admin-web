import { Button } from 'antd'
import { RollbackOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

export default function Header({ returnButton, title, addButton, onClick }) {
	const history = useHistory()
	return (
		<div className="flex justify-between">
			{returnButton ? (
				<div>
					<Button onClick={() => history.goBack()} className="mb-5 ml-5">
						<RollbackOutlined />
						返回
					</Button>
				</div>
			) : (
				<div></div>
			)}

			{addButton ? (
				<div>
					<Button type="primary" onClick={onClick} className="mb-5 mr-5">
						{title}
					</Button>
				</div>
			) : (
				<div></div>
			)}
		</div>
	)
}
