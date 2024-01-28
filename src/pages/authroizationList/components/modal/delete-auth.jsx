import React, { useState } from 'react'
import { Button, message, Modal, Space } from 'antd'
import { useHttp } from '@/core/hooks/http/use-http'
import "./delete-auth.scss"

export const DeleteAuth = ({
	licenseId,
	startDate,
	expiredDate,
	getAllAuths,
}) => {
	const http = useHttp()

	const handleDeleteAuth = async () => {
		try {
			const {data} = await http.deleteAuth({
				id: licenseId,
			})
			if (data?.status === true) {
				getAllAuths()
				Modal.destroyAll()
				message.success(data.message)
			} else {
				message.error(data.message)
			}
		} catch (error) {
			message.error(data.message)
		}
	}

	return (
		<div>
			<Button
				type="link"
				danger
				onClick={() => {
					Modal.confirm({
						title: (
							<div className="mt-2 mb-5">
								刪除授權
							</div>
						),
						className: 'text-center',
						bodyStyle: {
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							height: '155px',
						},
						width: 320,
						icon:null,
						content: (
							<div>
								<p>
									授權時間: {startDate} ~ {expiredDate}
								</p>
								<p className="mb-5">您確定要刪除此授權嗎?</p>
							</div>
						),
						footer: (_, { OkBtn, CancelBtn }) => (
							<>
								<CancelBtn />
								<Button type="primary" onClick={handleDeleteAuth}>確定</Button>
							</>
						),
					})
				}}
			>
				刪除授權
			</Button>
		</div>
	)
}
