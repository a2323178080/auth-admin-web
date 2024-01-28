import React, { useState } from 'react'
import { Button, message, Modal, Space } from 'antd'
import { useHttp } from '@/core/hooks/http/use-http'
import "./delete-agent.scss"

export const DeleteAgent = ({ agentId, agentName, onGetAgentsData }) => {
	const http = useHttp()

	const handleDeleteAgent = async () => {
		try {
			const {data} = await http.deleteAgent({
				id: agentId,
			})
			if (data?.status === true) {
				onGetAgentsData()
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
								刪除代理商
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
								<p>代理商:{agentName}</p>
								<p className="mb-5">您確定要刪除此代理商嗎?</p>
							</div>
						),
						footer: (_, { OkBtn, CancelBtn }) => (
							<>
								<CancelBtn />
								<Button type="primary" onClick={handleDeleteAgent}>確定</Button>
							</>
						),
					})
				}}
			>
				刪除
			</Button>
		</div>
	)
}
