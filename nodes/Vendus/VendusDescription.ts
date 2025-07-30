import { INodeProperties } from 'n8n-workflow';

// Operations for all resources
export const vendusOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['account'],
			},
		},
		options: [
			{
				name: 'Get Account Info',
				value: 'getAccount',
				description: 'Get account information',
				action: 'Get account information',
				routing: {
					request: {
						method: 'GET',
						url: '/account',
					},
				},
			},
			{
				name: 'Get Account by ID',
				value: 'getAccountById',
				description: 'Get account information by ID',
				action: 'Get account information by ID',
				routing: {
					request: {
						method: 'GET',
						url: '/account/={{$parameter.accountId}}',
					},
				},
			},
			{
				name: 'Update Account',
				value: 'updateAccount',
				description: 'Update account information',
				action: 'Update account information',
				routing: {
					request: {
						method: 'PATCH',
						url: '/account/={{$parameter.accountId}}',
					},
				},
			},
			{
				name: 'Get Account Users',
				value: 'getAccountUsers',
				action: 'Get account users',
				routing: {
					request: {
						method: 'GET',
						url: '/account/users',
					},
				},
			},
		],
		default: 'getAccount',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['client'],
			},
		},
		options: [
			{
				name: 'Get All Clients',
				value: 'getClients',
				action: 'Get all clients',
				routing: {
					request: {
						method: 'GET',
						url: '/clients',
					},
				},
			},
			{
				name: 'Get Client by ID',
				value: 'getClientById',
				action: 'Get client by ID',
				routing: {
					request: {
						method: 'GET',
						url: '/clients/={{$parameter.clientId}}',
					},
				},
			},
			{
				name: 'Create Client',
				value: 'createClient',
				description: 'Create a new client',
				action: 'Create a new client',
				routing: {
					request: {
						method: 'POST',
						url: '/clients',
					},
				},
			},
			{
				name: 'Update Client',
				value: 'updateClient',
				description: 'Update client information',
				action: 'Update client information',
				routing: {
					request: {
						method: 'PATCH',
						url: '/clients/={{$parameter.clientId}}',
					},
				},
			},
			{
				name: 'Delete Client',
				value: 'deleteClient',
				description: 'Delete a client',
				action: 'Delete a client',
				routing: {
					request: {
						method: 'DELETE',
						url: '/clients/={{$parameter.clientId}}',
					},
				},
			},
			{
				name: 'Get Client Balance',
				value: 'getClientBalance',
				action: 'Get client balance',
				routing: {
					request: {
						method: 'GET',
						url: '/clients/={{$parameter.clientId}}/balance',
					},
				},
			},
			{
				name: 'Get Client Resume',
				value: 'getClientResume',
				action: 'Get client resume',
				routing: {
					request: {
						method: 'GET',
						url: '/clients/={{$parameter.clientId}}/resume',
					},
				},
			},
		],
		default: 'getClients',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['document'],
			},
		},
		options: [
			{
				name: 'Get All Documents',
				value: 'getDocuments',
				action: 'Get all documents',
				routing: {
					request: {
						method: 'GET',
						url: '/documents',
					},
				},
			},
			{
				name: 'Get Document by ID',
				value: 'getDocumentById',
				action: 'Get document by ID',
				routing: {
					request: {
						method: 'GET',
						url: '/documents/={{$parameter.documentId}}',
					},
				},
			},
			{
				name: 'Create Document',
				value: 'createDocument',
				description: 'Create a new document (invoice, receipt, etc.)',
				action: 'Create a new document',
				routing: {
					request: {
						method: 'POST',
						url: '/documents',
					},
				},
			},
			{
				name: 'Update Document',
				value: 'updateDocument',
				description: 'Update document status',
				action: 'Update document status',
				routing: {
					request: {
						method: 'PATCH',
						url: '/documents/={{$parameter.documentId}}',
					},
				},
			},
			{
				name: 'Get Payment Methods',
				value: 'getPaymentMethods',
				description: 'Get available payment methods',
				action: 'Get available payment methods',
				routing: {
					request: {
						method: 'GET',
						url: '/documents/paymentmethods',
					},
				},
			},
			{
				name: 'Create Payment Method',
				value: 'createPaymentMethod',
				description: 'Create a new payment method',
				action: 'Create a new payment method',
				routing: {
					request: {
						method: 'POST',
						url: '/documents/paymentmethods',
					},
				},
			},
			{
				name: 'Get Document Types',
				value: 'getDocumentTypes',
				description: 'Get available document types',
				action: 'Get available document types',
				routing: {
					request: {
						method: 'GET',
						url: '/documents/types',
					},
				},
			},
		],
		default: 'getDocuments',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['product'],
			},
		},
		options: [
			{
				name: 'Get All Products',
				value: 'getProducts',
				action: 'Get all products',
				routing: {
					request: {
						method: 'GET',
						url: '/products',
					},
				},
			},
			{
				name: 'Get Product by ID',
				value: 'getProductById',
				action: 'Get product by ID',
				routing: {
					request: {
						method: 'GET',
						url: '/products/={{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Create Product',
				value: 'createProduct',
				description: 'Create a new product',
				action: 'Create a new product',
				routing: {
					request: {
						method: 'POST',
						url: '/products',
					},
				},
			},
			{
				name: 'Update Product',
				value: 'updateProduct',
				description: 'Update product information',
				action: 'Update product information',
				routing: {
					request: {
						method: 'PATCH',
						url: '/products/={{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Delete Product',
				value: 'deleteProduct',
				description: 'Delete a product',
				action: 'Delete a product',
				routing: {
					request: {
						method: 'DELETE',
						url: '/products/={{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Get Product Categories',
				value: 'getProductCategories',
				action: 'Get product categories',
				routing: {
					request: {
						method: 'GET',
						url: '/products/categories',
					},
				},
			},
			{
				name: 'Create Product Category',
				value: 'createProductCategory',
				description: 'Create a new product category',
				action: 'Create a new product category',
				routing: {
					request: {
						method: 'POST',
						url: '/products/categories',
					},
				},
			},
			{
				name: 'Get Product Brands',
				value: 'getProductBrands',
				action: 'Get product brands',
				routing: {
					request: {
						method: 'GET',
						url: '/products/brands',
					},
				},
			},
			{
				name: 'Create Product Brand',
				value: 'createProductBrand',
				description: 'Create a new product brand',
				action: 'Create a new product brand',
				routing: {
					request: {
						method: 'POST',
						url: '/products/brands',
					},
				},
			},
			{
				name: 'Get Product Stock',
				value: 'getProductStock',
				description: 'Get product stock information',
				action: 'Get product stock information',
				routing: {
					request: {
						method: 'GET',
						url: '/products/stocks/={{$parameter.productId}}',
					},
				},
			},
			{
				name: 'Update Product Stock',
				value: 'updateProductStock',
				action: 'Update product stock',
				routing: {
					request: {
						method: 'POST',
						url: '/products/stocks',
					},
				},
			},
		],
		default: 'getProducts',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['receipt'],
			},
		},
		options: [
			{
				name: 'Get All Receipts',
				value: 'getReceipts',
				action: 'Get all receipts',
				routing: {
					request: {
						method: 'GET',
						url: '/receipts',
					},
				},
			},
			{
				name: 'Get Receipt by ID',
				value: 'getReceiptById',
				action: 'Get receipt by ID',
				routing: {
					request: {
						method: 'GET',
						url: '/receipts/={{$parameter.receiptId}}',
					},
				},
			},
			{
				name: 'Create Receipt',
				value: 'createReceipt',
				description: 'Create a new receipt',
				action: 'Create a new receipt',
				routing: {
					request: {
						method: 'POST',
						url: '/receipts',
					},
				},
			},
			{
				name: 'Update Receipt',
				value: 'updateReceipt',
				description: 'Update receipt information',
				action: 'Update receipt information',
				routing: {
					request: {
						method: 'PATCH',
						url: '/receipts/={{$parameter.receiptId}}',
					},
				},
			},
		],
		default: 'getReceipts',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['store'],
			},
		},
		options: [
			{
				name: 'Get All Stores',
				value: 'getStores',
				action: 'Get all stores',
				routing: {
					request: {
						method: 'GET',
						url: '/stores',
					},
				},
			},
			{
				name: 'Get Store by ID',
				value: 'getStoreById',
				action: 'Get store by ID',
				routing: {
					request: {
						method: 'GET',
						url: '/stores/={{$parameter.storeId}}',
					},
				},
			},
		],
		default: 'getStores',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['supplier'],
			},
		},
		options: [
			{
				name: 'Get All Suppliers',
				value: 'getSuppliers',
				action: 'Get all suppliers',
				routing: {
					request: {
						method: 'GET',
						url: '/suppliers',
					},
				},
			},
			{
				name: 'Get Supplier by ID',
				value: 'getSupplierById',
				action: 'Get supplier by ID',
				routing: {
					request: {
						method: 'GET',
						url: '/suppliers/={{$parameter.supplierId}}',
					},
				},
			},
			{
				name: 'Create Supplier',
				value: 'createSupplier',
				description: 'Create a new supplier',
				action: 'Create a new supplier',
				routing: {
					request: {
						method: 'POST',
						url: '/suppliers',
					},
				},
			},
			{
				name: 'Update Supplier',
				value: 'updateSupplier',
				description: 'Update supplier information',
				action: 'Update supplier information',
				routing: {
					request: {
						method: 'PATCH',
						url: '/suppliers/={{$parameter.supplierId}}',
					},
				},
			},
		],
		default: 'getSuppliers',
	},
];

// Fields for all operations
export const vendusFields: INodeProperties[] = [
	// Account operations
	{
		displayName: 'Account ID',
		name: 'accountId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getAccountById', 'updateAccount'],
			},
		},
		description: 'The ID of the account',
	},
	{
		displayName: 'Store ID',
		name: 'storeId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getAccountUsers'],
			},
		},
		description: 'Filter users by store ID',
	},
	{
		displayName: 'Exclude Accountants',
		name: 'excludeAccountants',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getAccountUsers'],
			},
		},
		description: 'Exclude accountants from results',
	},
	{
		displayName: 'Company',
		name: 'company',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
		description: 'Company name',
	},
	{
		displayName: 'Address',
		name: 'address',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
		description: 'Company address',
	},
	{
		displayName: 'Postal Code',
		name: 'postalCode',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
	},
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
	},
	{
		displayName: 'Tax ID',
		name: 'taxId',
		type: 'options',
		options: [
			{ name: 'Normal Rate', value: 'NOR' },
			{ name: 'Intermediate Rate', value: 'INT' },
			{ name: 'Reduced Rate', value: 'RED' },
			{ name: 'Exempt', value: 'ISE' },
			{ name: 'Others', value: 'OUT' },
		],
		default: 'NOR',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
		description: 'Default tax rate',
	},
	{
		displayName: 'Tax Exemption',
		name: 'taxExemption',
		type: 'options',
		options: [
			{ name: 'M01 - Article 16.6 CIVA', value: 'M01' },
			{ name: 'M02 - Decree-Law 198/90', value: 'M02' },
			{ name: 'M04 - Article 13 CIVA', value: 'M04' },
			{ name: 'M05 - Article 14 CIVA', value: 'M05' },
			{ name: 'M06 - Article 15 CIVA', value: 'M06' },
			{ name: 'M07 - Article 9 CIVA', value: 'M07' },
			{ name: 'M10 - VAT Exemption Regime', value: 'M10' },
			{ name: 'M11 - Tobacco Special Regime', value: 'M11' },
			{ name: 'M12 - Travel Agencies Margin', value: 'M12' },
			{ name: 'M13 - Second-Hand Goods Margin', value: 'M13' },
			{ name: 'M14 - Art Objects Margin', value: 'M14' },
			{ name: 'M15 - Collection Objects Margin', value: 'M15' },
			{ name: 'M16 - Article 14 RITI', value: 'M16' },
			{ name: 'M19 - Other Exemptions', value: 'M19' },
			{ name: 'M20 - VAT Forfeiture Regime', value: 'M20' },
			{ name: 'M21 - VAT No Deduction Right', value: 'M21' },
			{ name: 'M25 - Consignment Goods', value: 'M25' },
			{ name: 'M26 - Food Basket (Expired)', value: 'M26' },
			{ name: 'M30 - VAT Self-Liquidation (2.1.i)', value: 'M30' },
			{ name: 'M31 - VAT Self-Liquidation (2.1.j)', value: 'M31' },
			{ name: 'M32 - VAT Self-Liquidation (2.1.l)', value: 'M32' },
			{ name: 'M33 - VAT Self-Liquidation (2.1.m)', value: 'M33' },
			{ name: 'M34 - VAT Self-Liquidation (2.1.n)', value: 'M34' },
			{ name: 'M40 - VAT Self-Liquidation (6.6.a)', value: 'M40' },
			{ name: 'M41 - VAT Self-Liquidation (8.3.R)', value: 'M41' },
			{ name: 'M42 - VAT Self-Liquidation (21.2007)', value: 'M42' },
			{ name: 'M43 - VAT Self-Liquidation (362.99)', value: 'M43' },
			{ name: 'M99 - Not Subject/Not Taxed', value: 'M99' },
		],
		default: 'M40',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
		description: 'Tax exemption reason',
	},
	{
		displayName: 'Tax Exemption Law',
		name: 'taxExemptionLaw',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
		description: 'Tax exemption applicable law',
	},
	{
		displayName: 'Fiscal ID',
		name: 'fiscalId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
		description: 'Phone number',
	},
	{
		displayName: 'Conservatory',
		name: 'conservatory',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
	},
	{
		displayName: 'Social Capital',
		name: 'socialCapital',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
		description: 'Company Social Capital',
	},
	{
		displayName: 'Country',
		name: 'country',
		type: 'options',
		options: [
			{ name: 'Angola', value: 'AO' },
			{ name: 'Portugal', value: 'PT' },
			{ name: 'Portugal - Azores', value: 'PT-AC' },
			{ name: 'Portugal - Madeira', value: 'PT-MA' },
		],
		default: 'PT',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
	},
	{
		displayName: 'Custom JSON',
		name: 'customJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
		description: 'Custom JSON payload to override default fields',
	},

	// Client operations
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['getClientById', 'updateClient', 'deleteClient', 'getClientBalance', 'getClientResume'],
			},
		},
		description: 'The ID of the client',
	},
	{
		displayName: 'Search Query',
		name: 'q',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['getClients'],
			},
		},
		description: 'Search string for clients',
	},
	{
		displayName: 'Fiscal ID',
		name: 'fiscalId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['getClients', 'createClient', 'updateClient'],
			},
		},
		description: 'Fiscal ID of the client',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		description: 'Client name',
	},
	{
		displayName: 'Address',
		name: 'address',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		description: 'Client address',
	},
	{
		displayName: 'Postal Code',
		name: 'postalcode',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
	},
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		description: 'Phone number',
	},
	{
		displayName: 'Mobile',
		name: 'mobile',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		description: 'Mobile number',
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		description: 'Email address',
	},
	{
		displayName: 'Website',
		name: 'website',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		description: 'Website URL',
	},
	{
		displayName: 'Country',
		name: 'country',
		type: 'options',
		options: [
			{ name: 'Portugal', value: 'PT' },
			{ name: 'Spain', value: 'ES' },
			{ name: 'France', value: 'FR' },
			{ name: 'Angola', value: 'AO' },
		],
		default: 'PT',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		description: 'Country code using ISO 3166-1 alpha-2',
	},
	{
		displayName: 'External Reference',
		name: 'externalReference',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		description: 'Notes about the client',
	},
	{
		displayName: 'Price Group ID',
		name: 'priceGroupId',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient'],
			},
		},
	},
	{
		displayName: 'Send Email',
		name: 'sendEmail',
		type: 'options',
		options: [
			{ name: 'Yes', value: 'yes' },
			{ name: 'No', value: 'no' },
		],
		default: 'yes',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient'],
			},
		},
		description: 'Send invoice by email',
	},
	{
		displayName: 'Default Pay Due',
		name: 'defaultPayDue',
		type: 'options',
		options: [
			{ name: 'Now', value: 'now' },
			{ name: '1 Day', value: '1' },
			{ name: '7 Days', value: '7' },
			{ name: '15 Days', value: '15' },
			{ name: '30 Days', value: '30' },
			{ name: '45 Days', value: '45' },
			{ name: '60 Days', value: '60' },
			{ name: '90 Days', value: '90' },
		],
		default: '15',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient'],
			},
		},
		description: 'Default payment due period',
	},
	{
		displayName: 'IRS Retention',
		name: 'irsRetention',
		type: 'options',
		options: [
			{ name: 'Yes', value: 'yes' },
			{ name: 'No', value: 'no' },
		],
		default: 'no',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient'],
			},
		},
		description: 'Whether client does IRS retention',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{ name: 'Active', value: 'active' },
			{ name: 'Inactive', value: 'inactive' },
		],
		default: 'active',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['updateClient'],
			},
		},
		description: 'Client status',
	},
	{
		displayName: 'Client Custom JSON',
		name: 'clientCustomJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		description: 'Custom JSON payload to override default fields',
	},

	// Document operations
	{
		displayName: 'Document ID',
		name: 'documentId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['getDocumentById', 'updateDocument'],
			},
		},
		description: 'The ID of the document',
	},
	{
		displayName: 'Store ID',
		name: 'storeId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['getDocuments'],
			},
		},
		description: 'Filter documents by store ID',
	},
	{
		displayName: 'Register ID',
		name: 'registerId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['getDocuments', 'createDocument'],
			},
		},
		description: 'POS ID',
	},
	{
		displayName: 'Document Type',
		name: 'type',
		type: 'options',
		options: [
			{ name: 'Invoice', value: 'FT' },
			{ name: 'Simplified Invoice', value: 'FS' },
			{ name: 'Invoice Receipt', value: 'FR' },
			{ name: 'Credit Note', value: 'NC' },
			{ name: 'Table Consultation', value: 'DC' },
			{ name: 'Pro-Forma Invoice', value: 'PF' },
			{ name: 'Quote', value: 'OT' },
			{ name: 'Order', value: 'EC' },
			{ name: 'Asset Guide', value: 'GA' },
			{ name: 'Transport Guide', value: 'GT' },
			{ name: 'Shipment Guide', value: 'GR' },
			{ name: 'Return Guide', value: 'GD' },
			{ name: 'Receipt', value: 'RG' },
		],
		default: 'FT',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		description: 'Type of document',
	},
	{
		displayName: 'Date',
		name: 'date',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		description: 'Document date (YYYY-MM-DD). If not set, defaults to current date.',
	},
	{
		displayName: 'Date Supply',
		name: 'dateSupply',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		description: 'Supply date (YYYY-MM-DD). If not set, defaults to current date.',
	},
	{
		displayName: 'Date Due',
		name: 'dateDue',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		description: 'Payment due date (YYYY-MM-DD)',
	},
	{
		displayName: 'Notes',
		name: 'notes',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		description: 'Document notes',
	},
	{
		displayName: 'External Reference',
		name: 'externalReference',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
	},
	{
		displayName: 'Stock Operation',
		name: 'stockOperation',
		type: 'options',
		options: [
			{ name: 'Increment Stock', value: 'in' },
			{ name: 'Don\'t Change Stock', value: 'none' },
			{ name: 'Decrement Stock', value: 'out' },
		],
		default: 'out',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		description: 'Operation on items with stock control',
	},
	{
		displayName: 'Output',
		name: 'output',
		type: 'options',
		options: [
			{ name: 'Auto', value: 'auto' },
			{ name: 'PDF URL', value: 'pdf_url' },
			{ name: 'PDF', value: 'pdf' },
			{ name: 'HTML', value: 'html' },
			{ name: 'ESC/POS', value: 'escpos' },
			{ name: 'TPA SIBS', value: 'tpasibs' },
		],
		default: 'html',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		description: 'Printable output format',
	},
	{
		displayName: 'Document Status',
		name: 'documentStatus',
		type: 'options',
		options: [
			{ name: 'Normal', value: 'N' },
			{ name: 'Canceled', value: 'A' },
			{ name: 'Invoiced', value: 'F' },
		],
		default: 'N',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['updateDocument'],
			},
		},
	},
	{
		displayName: 'Document Custom JSON',
		name: 'documentCustomJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		description: 'Custom JSON payload to override default fields',
	},

	// Product operations
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getProductById', 'updateProduct', 'deleteProduct', 'getProductStock'],
			},
		},
		description: 'The ID of the product',
	},
	{
		displayName: 'Search Query',
		name: 'q',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getProducts'],
			},
		},
		description: 'Search string for products',
	},
	{
		displayName: 'Product Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product name',
	},
	{
		displayName: 'Reference',
		name: 'reference',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product reference code',
	},
	{
		displayName: 'Barcode',
		name: 'barcode',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product barcode',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product description',
	},
	{
		displayName: 'Gross Price',
		name: 'grossPrice',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product gross price',
	},
	{
		displayName: 'Supply Price',
		name: 'supplyPrice',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product supply price',
	},
	{
		displayName: 'Unit ID',
		name: 'unitId',
		type: 'number',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct'],
			},
		},
		description: 'Product unit ID',
	},
	{
		displayName: 'Type ID',
		name: 'typeId',
		type: 'options',
		options: [
			{ name: 'Product', value: 'P' },
			{ name: 'Service', value: 'S' },
			{ name: 'Other', value: 'O' },
			{ name: 'Tax', value: 'I' },
			{ name: 'Special Consumption Tax', value: 'E' },
		],
		default: 'P',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product type ID',
	},
	{
		displayName: 'Class ID',
		name: 'classId',
		type: 'options',
		options: [
			{ name: 'Food', value: 'ALI' },
			{ name: 'Alcohol and Tobacco', value: 'ALT' },
			{ name: 'Cultural Products', value: 'CUL' },
			{ name: 'Sports and Leisure', value: 'DEP' },
			{ name: 'Home Appliances', value: 'EDM' },
			{ name: 'Home Products', value: 'CAS' },
			{ name: 'Computer and Electronics', value: 'PCS' },
			{ name: 'Fashion and Accessories', value: 'MOD' },
			{ name: 'Perfumery and Cosmetics', value: 'PER' },
			{ name: 'Jewelry and Watches', value: 'JOI' },
		],
		default: 'ALI',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product class ID',
	},
	{
		displayName: 'Stock Control',
		name: 'stockControl',
		type: 'options',
		options: [
			{ name: 'No', value: 0 },
			{ name: 'Yes', value: 1 },
		],
		default: 1,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Enable stock control',
	},
	{
		displayName: 'Stock Type',
		name: 'stockType',
		type: 'options',
		options: [
			{ name: 'Merchandise', value: 'M' },
			{ name: 'Raw Materials', value: 'P' },
			{ name: 'Finished Products', value: 'A' },
			{ name: 'By-Products', value: 'S' },
			{ name: 'Work in Progress', value: 'T' },
		],
		default: 'M',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
	},
	{
		displayName: 'Tax ID',
		name: 'taxId',
		type: 'options',
		options: [
			{ name: 'Normal Rate', value: 'NOR' },
			{ name: 'Intermediate Rate', value: 'INT' },
			{ name: 'Reduced Rate', value: 'RED' },
			{ name: 'Exempt', value: 'ISE' },
			{ name: 'Others', value: 'OUT' },
		],
		default: 'NOR',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product tax ID',
	},
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product category ID',
	},
	{
		displayName: 'Brand ID',
		name: 'brandId',
		type: 'number',
		default: '',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product brand ID',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		options: [
			{ name: 'Active', value: 'on' },
			{ name: 'Inactive', value: 'off' },
		],
		default: 'on',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Product status',
	},
	{
		displayName: 'Product Custom JSON',
		name: 'productCustomJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		description: 'Custom JSON payload to override default fields',
	},

	// Receipt operations
	{
		displayName: 'Receipt ID',
		name: 'receiptId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['receipt'],
				operation: ['getReceiptById', 'updateReceipt'],
			},
		},
		description: 'The ID of the receipt',
	},

	// Store operations
	{
		displayName: 'Store ID',
		name: 'storeId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['store'],
				operation: ['getStoreById'],
			},
		},
		description: 'The ID of the store',
	},

	// Supplier operations
	{
		displayName: 'Supplier ID',
		name: 'supplierId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['getSupplierById', 'updateSupplier'],
			},
		},
		description: 'The ID of the supplier',
	},
	{
		displayName: 'Supplier Name',
		name: 'supplierName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier Fiscal ID',
		name: 'supplierFiscalId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier Address',
		name: 'supplierAddress',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier Postal Code',
		name: 'supplierPostalCode',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier City',
		name: 'supplierCity',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier Phone',
		name: 'supplierPhone',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier Mobile',
		name: 'supplierMobile',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier Email',
		name: 'supplierEmail',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier Website',
		name: 'supplierWebsite',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier Country',
		name: 'supplierCountry',
		type: 'options',
		options: [
			{ name: 'Portugal', value: 'PT' },
			{ name: 'Spain', value: 'ES' },
			{ name: 'France', value: 'FR' },
			{ name: 'Angola', value: 'AO' },
		],
		default: 'PT',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier Notes',
		name: 'supplierNotes',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
	{
		displayName: 'Supplier Custom JSON',
		name: 'supplierCustomJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
		description: 'Custom JSON payload to override default fields',
	},
];
