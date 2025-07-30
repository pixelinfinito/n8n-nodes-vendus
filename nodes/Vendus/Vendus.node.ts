import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';
import { vendusOperations, vendusFields } from './VendusDescription';

export class Vendus implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Vendus',
		name: 'vendus',
		icon: 'file:vendus.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Vendus API for invoicing and business management. Developed by Pixel Infinito (https://pixel.ao)',
		defaults: {
			name: 'Vendus',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'vendusApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials?.baseUrl}}',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Account',
						value: 'account',
					},
					{
						name: 'Client',
						value: 'client',
					},
					{
						name: 'Document',
						value: 'document',
					},
					{
						name: 'Product',
						value: 'product',
					},
					{
						name: 'Receipt',
						value: 'receipt',
					},
					{
						name: 'Store',
						value: 'store',
					},
					{
						name: 'Supplier',
						value: 'supplier',
					},
				],
				default: 'account',
			},

			...vendusOperations,
			...vendusFields,
		],
	};
}
