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

exports.phone = async function(req, res) {
	var phone = await contentsService.phoneSync()
	return res.status(200).json({
		code:0,
		msg: '成功',
		data: phone
	})
}