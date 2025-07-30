const { Vendus } = require('./nodes/Vendus/Vendus.node');

const { VendusApi } = require('./credentials/VendusApi.credentials');

module.exports = {
	nodes: [
		Vendus,
	],
	credentials: [
		VendusApi,
	],
};
