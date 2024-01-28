import { useEffect, useState } from 'react'
import { Button, Input, Space, Form } from 'antd'
import { SyncOutlined } from '@ant-design/icons'

export const Captcha = ({ value, onChange }) => {
	const [captchaSrc, setCaptchaSrc] = useState('/api/user/captcha')
	const { status, errors } = Form.Item.useStatus()

	const handleReload = () => {
		const randomParam = Date.now()
		setCaptchaSrc(`/api/user/captcha?${randomParam}`)
	}
	return (
		<div>
			<Space direction="vertical" align="center">
				<Space.Compact>
					<Input
						type="text"
						placeholder="驗證碼"
						value={value}
						onChange={onChange}
					/>
					<Button onClick={handleReload}>
						<SyncOutlined />
					</Button>
				</Space.Compact>
				<img src={captchaSrc} alt="驗證碼" className="mt-5" />
			</Space>
		</div>
	)
}
