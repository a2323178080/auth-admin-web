import { Button, message, Modal, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useHttp } from '@/core/hooks/http/use-http'

import { ShopRecord } from '@/pages/quantity-information/component/modal/shop-record'
import { columns } from '@/pages/quantity-information/component/columns'
import './quantity-table.scss'

//決定集團的rowSpan
const handleCompanyRowSpan = brandListArray => {
	let number = 0
	brandListArray.forEach(item => {
		if (item.shopList.length === 0) number++
		else
			item.shopList.forEach(() => {
				number++
			})
	})

	return number
}

export default function QuantityTable({ id }) {
	const screenHeight = window.innerHeight * 0.6
	const http = useHttp()

	const [initialObject, setInitialObject] = useState({})
	const [initialArray, setInitialArray] = useState([])
	useEffect(() => {
		getQuantity()
	}, [])

	const getQuantity = async () => {
		try {
			const { data } = await http.getQuantity({
				id: id,
			})
			if (data?.status === true) {
				setInitialObject(data.data)
				setInitialArray(data.data.companyList)
				message.success(data.message)
			} else {
				message.error(data.message)
			}
		} catch (error) {
			message.error(data.message)
		}
	}

	const getNewArray = array => {
		const newArray = []
		array.forEach((item, index0) => {
			if (item.brandList.length === 0) {
				item.brandList.push({
					key: 'test',
					brandName: '-',
					shopList: [],
				})
			}
			item.brandList.forEach((brandObject, index) => {
				if (brandObject.shopList.length === 0) {
					brandObject.shopList.push({
						key: 'withoutShop',
						shopId: '',
						shopName: '-',
						posActive: '-',
						posReady: '-',
						posExpired: '-',
						posTotal: '-',
						byodActive: '-',
						byodReady: '-',
						byodExpired: '-',
						byodTogo: '-',
						reserveByodTogo: '-',
					})
				}

				brandObject.shopList.forEach((shopObject, shopObjectIndex) => {
					if (shopObjectIndex === 0) {
						shopObject = {
							...shopObject,
							brandRowSpan: brandObject.shopList.length,
						}
						if (index === 0)
							shopObject = {
								...shopObject,
								index: index,
								rowSpan: handleCompanyRowSpan(item.brandList),
							}
					}

					//產生新的陣列裡面包含brandRowSpan、rowSpan、companyName、brandName
					newArray.push({
						...shopObject,
						companyName: item.companyName,
						brandName: brandObject.brandName,
						keyValue: array.indexOf(item) + 1,
						posActive: `${shopObject.posTotal}(${shopObject.posActive})`,
					})
				})
			})
			newArray.push({ ...item, keyValue: '小計', rowSpan: 1, brandRowSpan: 1 })
		})

		newArray.push({
			keyValue: '合計',
			rowSpan: 1,
			brandRowSpan: 1,
			companyName: initialObject.companyAllSum,
			brandName: initialObject.brandAllSum,
			shopName: initialObject.shopAllSum,

			posActive: `${initialObject.posTotalAllSum}(${initialObject.posActiveAllSum})`,
			posReady: initialObject.posReadyAllSum,
			posExpired: initialObject.posExpiredAllSum,

			byodActive: initialObject.byodActiveAllSum,
			byodReady: initialObject.byodReadyAllSum,
			byodExpired: initialObject.byodExpiredAllSum,
			byodTogo: initialObject.byodTogoAllSum,
			reserveByodTogo: initialObject.reserveByodTogoAllSum,
		})

		return newArray
	}

	const getRowClassName = record => {
		if (record.keyValue === '小計') {
			return 'bg-custom-light-gray'
		} else if (record.keyValue === '合計') {
			return 'bg-custom-dark-gray text-white'
		}
		return ''
	}
	return (
		<div className="quantity-table">
			{initialObject&&	<h1 className="mb-4 ml-5 text-xl font-bold">{initialObject.licenseName}</h1>}

			{initialObject && initialObject.companyAllSum ? (
				<Table
					columns={columns}
					dataSource={getNewArray(initialArray)}
					bordered
					pagination={false}
					rowClassName={getRowClassName}
					scroll={{ y: screenHeight }}
					className="gray-header"
				/>
			) : (
				<Table />
			)}
		</div>
	)
}
