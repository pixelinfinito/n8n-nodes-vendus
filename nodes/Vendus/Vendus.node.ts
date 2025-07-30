import { INodeType, INodeTypeDescription, NodeConnectionType, ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
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

	methods = {
		loadOptions: {
			// Load Product Categories
			async getProductCategories(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				try {
					const response = await this.helpers.httpRequestWithAuthentication.call(
						this,
						'vendusApi',
						{
							method: 'GET',
							url: '/products/categories',
						},
					);

					if (Array.isArray(response)) {
						return response.map((category: any) => ({
							name: category.title || category.name || `Category ${category.id}`,
							value: category.id,
						}));
					}
					return [];
				} catch (error) {
					// Fallback options if API fails
					return [
						{ name: 'General', value: '1' },
						{ name: 'Electronics', value: '2' },
						{ name: 'Clothing', value: '3' },
					];
				}
			},

			// Load Product Brands
			async getProductBrands(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				try {
					const response = await this.helpers.httpRequestWithAuthentication.call(
						this,
						'vendusApi',
						{
							method: 'GET',
							url: '/products/brands',
						},
					);

					if (Array.isArray(response)) {
						return response.map((brand: any) => ({
							name: brand.title || brand.name || `Brand ${brand.id}`,
							value: brand.id,
						}));
					}
					return [];
				} catch (error) {
					// Fallback options if API fails
					return [
						{ name: 'Generic', value: '1' },
						{ name: 'Premium', value: '2' },
					];
				}
			},

			// Load Product Units
			async getProductUnits(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				try {
					const response = await this.helpers.httpRequestWithAuthentication.call(
						this,
						'vendusApi',
						{
							method: 'GET',
							url: '/products/units',
						},
					);

					if (Array.isArray(response)) {
						return response.map((unit: any) => ({
							name: unit.title || unit.name || `Unit ${unit.id}`,
							value: unit.id,
						}));
					}
					return [];
				} catch (error) {
					// Fallback options if API fails
					return [
						{ name: 'Each (Un)', value: '1' },
						{ name: 'Kilogram (Kg)', value: '2' },
						{ name: 'Liter (L)', value: '3' },
						{ name: 'Meter (M)', value: '4' },
					];
				}
			},

			// Load Stores
			async getStores(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				try {
					const response = await this.helpers.httpRequestWithAuthentication.call(
						this,
						'vendusApi',
						{
							method: 'GET',
							url: '/stores',
						},
					);

					if (Array.isArray(response)) {
						return response.map((store: any) => ({
							name: store.title || store.name || `Store ${store.id}`,
							value: store.id,
						}));
					}
					return [];
				} catch (error) {
					// Fallback options if API fails
					return [
						{ name: 'Main Store', value: '1' },
					];
				}
			},

			// Load Payment Methods
			async getPaymentMethods(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				try {
					const response = await this.helpers.httpRequestWithAuthentication.call(
						this,
						'vendusApi',
						{
							method: 'GET',
							url: '/documents/paymentmethods',
						},
					);

					if (Array.isArray(response)) {
						return response.map((method: any) => ({
							name: method.title || method.name || `Payment Method ${method.id}`,
							value: method.id,
						}));
					}
					return [];
				} catch (error) {
					// Fallback options if API fails
					return [
						{ name: 'Cash', value: '1' },
						{ name: 'Credit Card', value: '2' },
						{ name: 'Bank Transfer', value: '3' },
						{ name: 'Check', value: '4' },
					];
				}
			},

			// Load Document Types
			async getDocumentTypes(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				try {
					const response = await this.helpers.httpRequestWithAuthentication.call(
						this,
						'vendusApi',
						{
							method: 'GET',
							url: '/documents/types',
						},
					);

					if (Array.isArray(response)) {
						return response.map((type: any) => ({
							name: type.title || type.name || `Document Type ${type.id}`,
							value: type.id,
						}));
					}
					return [];
				} catch (error) {
					// Fallback to static options if API fails
					return [
						{ name: 'Invoice', value: 'FT' },
						{ name: 'Simplified Invoice', value: 'FS' },
						{ name: 'Invoice Receipt', value: 'FR' },
						{ name: 'Credit Note', value: 'NC' },
						{ name: 'Table Consultation', value: 'DC' },
						{ name: 'Pro-Forma Invoice', value: 'PF' },
						{ name: 'Quote', value: 'OT' },
						{ name: 'Order', value: 'EC' },
						{ name: 'Receipt', value: 'RG' },
					];
				}
			},

			// Load Price Groups
			async getPriceGroups(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				try {
					const response = await this.helpers.httpRequestWithAuthentication.call(
						this,
						'vendusApi',
						{
							method: 'GET',
							url: '/products/pricegroups',
						},
					);

					if (Array.isArray(response)) {
						return response.map((group: any) => ({
							name: group.title || group.name || `Price Group ${group.id}`,
							value: group.id,
						}));
					}
					return [];
				} catch (error) {
					// Fallback options if API fails
					return [
						{ name: 'Standard', value: '1' },
						{ name: 'VIP', value: '2' },
						{ name: 'Wholesale', value: '3' },
					];
				}
			},

			// Load Clients (for document creation)
			async getClients(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				try {
					const response = await this.helpers.httpRequestWithAuthentication.call(
						this,
						'vendusApi',
						{
							method: 'GET',
							url: '/clients',
							qs: {
								per_page: 100, // Limit to 100 for performance
							},
						},
					);

					if (Array.isArray(response)) {
						return response.map((client: any) => ({
							name: `${client.name} (${client.fiscal_id || client.id})`,
							value: client.id,
						}));
					}
					return [];
				} catch (error) {
					return [];
				}
			},

			// Load Suppliers (for document creation)
			async getSuppliers(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				try {
					const response = await this.helpers.httpRequestWithAuthentication.call(
						this,
						'vendusApi',
						{
							method: 'GET',
							url: '/suppliers',
							qs: {
								per_page: 100, // Limit to 100 for performance
							},
						},
					);

					if (Array.isArray(response)) {
						return response.map((supplier: any) => ({
							name: `${supplier.name} (${supplier.fiscal_id || supplier.id})`,
							value: supplier.id,
						}));
					}
					return [];
				} catch (error) {
					return [];
				}
			},
		},
	};
}
