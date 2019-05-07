var contentsService = require('../services/contents.service');

exports.main = async function(req, res) {
	var contents = await contentsService.mainSync()
	return res.status(200).json({
		code: 0,
		msg: '成功',
		data: contents
	})	
}

exports.company = async function(req, res) {
	var company = await contentsService.companySync()
	return res.status(200).json({
		code: 0,
		msg: '成功',
		data: company
	})
}

exports.contact = async function(req, res) {
	var contact = await contentsService.contactSync()
	return res.status(200).json({
		code: 0,
		msg: '成功',
		data: contact
	})	
}

exports.products = async function(req, res) {
	var currentPage = req.query.page
	var type = req.query.type
	var query = {}
	if (currentPage) query.page = currentPage
	if (type) query.type = type
	var products = await contentsService.productsSync(query)
	return res.status(200).json({
		code: 0,
		msg: '成功',
		data: products		
	})
}

exports.product = async function(req, res) {
	var id = req.query.id
	var product = await contentsService.productSync(id)
	return res.status(200).json({
		code: 0,
		msg: '成功',
		data: product
	})
}

exports.test = async function(req, res) {
	var param = req.params.id

	if (param === '1') {
		var contents = await contentsService.mainSync()
		return res.status(200).json({
			code: 0,
			msg: '成功',
			data: contents
		})
	} else if (param === '2') {
		var company = await contentsService.companySync()
		return res.status(200).json({
			code: 0,
			msg: '成功',
			data: company
		})
	} else if (param === '3') {
		var contact = await contentsService.contactSync()
		return res.status(200).json({
			code: 0,
			msg: '成功',
			data: contact
		})	
	} else {
		return res.status(200).json({
			code: 0,
			msg: '成功',
			data: {
				recommendations: [{
					hot: true,
					name: '气泡袋',
					feature: '价格优惠',
					price: '价格面谈',
					image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
				},{
					hot: true,
					name: '气泡袋',
					feature: '价格优惠',
					price: '价格面谈',
					image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
				},{
					hot: true,
					name: '气泡袋',
					feature: '价格优惠',
					price: '价格面谈',
					image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
				},{
					hot: true,
					name: '气泡袋',
					feature: '价格优惠',
					price: '价格面谈',
					image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
				},{
					hot: true,
					name: '气泡袋',
					feature: '价格优惠',
					price: '价格面谈',
					image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
				},{
					hot: true,
					name: '气泡袋',
					feature: '价格优惠',
					price: '价格面谈',
					image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
				},{
					hot: true,
					name: '气泡袋',
					feature: '价格优惠',
					price: '价格面谈',
					image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
				}],
				productions: {
					types: [{
						name: '全部',
						code: 0
					},{
						name: '气泡膜',
						code: 1
					},{
						name: '气垫膜',
						code: 2
					},{
						name: '塑料袋',
						code: 3
					},{
						name: '其他',
						code: 4
					}],
					list: [{
						hot: true,
						name: '气泡袋',
						feature: '价格优惠',
						image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
					},{
						hot: true,
						name: '气泡袋',
						feature: '价格优惠',
						image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
					},{
						hot: true,
						name: '气泡袋',
						feature: '价格优惠',
						image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
					},{
						hot: true,
						name: '气泡袋',
						feature: '价格优惠',
						image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
					},{
						hot: true,
						name: '气泡袋',
						feature: '价格优惠',
						image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
					},{
						hot: true,
						name: '气泡袋',
						feature: '价格优惠',
						image: 'https://imgsa.baidu.com/slp/w%3D830/sign=8017c6beb41bb0518f24be2b067bda77/63d0f703918fa0ec219aae91219759ee3c6ddbc9.jpg'
					}]
				},
				company: {
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557122525664&di=be8c7a6d9f12e585621cefe514b7576d&imgtype=0&src=http%3A%2F%2Fimg.jdzj.com%2FUserDocument%2F2016a%2Fyuling1993%2FPicture%2F20173685738.jpg',
					name: '重庆国和塑胶制造有限公司',
					description: '重庆三星塑膜制品厂是一家股份合作制企业，始建于1997年4月，位于重庆市南岸区鸡冠石镇，是一家生产塑料包装类产品的企业，现已成为重庆市汽车IT摩托车行业塑料包装类产品的专业生产厂家，年产各类塑料袋、气泡袋五千万套，与多家大中型汽车生产企业（如：长安、长安福特、宗申、力帆、隆鑫、银翔等），长期建立有好的合作配套网络。产品随各大主机厂家出口到欧美、东南亚、中东等国际市场。本厂主要生产塑料、气垫膜、气泡袋、塑料袋。年生产能力已达1500吨。工厂古地面积六千平方米，现有固定资产300万元，员工100余人，其中工程师3人，技术员8人，检验员5人，公司下设营销部、管理部、生产部、品管部及为之配套的机构。我厂现有各类生产检测设备50余台，并与2005年通过ISO2000-2001质量认证。我厂为进一步拓展国内外市场将继续加大对新产品、新工艺的投资及研发，不断完善摩托车的包装类产品，让三星包装服务于大众。顾客满意是我厂的最高宗旨，现竭诚欢迎国内外客商来我厂考察、指导。'
				},
				contact: {
					phones: [{
						phoneNumber: '13112345678',
						type: {
							code: 1,
							name: '手机'
						}
					}, {
						phoneNumber: '13212345679',
						type: {
							code: 1,
							name: '手机'
						}
					}],
					address: '重庆市北碚区歇马镇卫星村梁家湾组'
				}
			}
		})
	}
}