import { Button, message } from 'antd'
import { useHttp } from '@/core/hooks/http/use-http'

export const Download = ({ licenseId, disabled }) => {
	const http = useHttp()
	const handleDownload = async licenseId => {
		try {
			const res = await http.download({ id: licenseId })
			if (res.status===200) {
				const blob = new Blob([res.data])

				const url = window.URL.createObjectURL(blob)
				const link = document.createElement('a')
				link.href = url

				link.setAttribute('download', 'license.config')
				link.click()

				window.URL.revokeObjectURL(url)
			}
		} catch (error) {
			console.error('下载文件时出错：', error)
		}
	}

	return (
		<div>
			<Button
				type="link"
				disabled={disabled}
				onClick={() => {
					return handleDownload(licenseId)
				}}
			>
				配置檔下載
			</Button>
		</div>
	)
}
