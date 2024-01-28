import { RollbackOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

export const ReturnButton = () => {
	const history = useHistory()
	return (
		<div>
			<Button onClick={() => history.goBack()}>
				<RollbackOutlined />
				返回
			</Button>
		</div>
	)
}
