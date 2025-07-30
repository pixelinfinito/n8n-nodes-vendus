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

// Fields for all operations - OPTIMIZED VERSION
export const vendusFields: INodeProperties[] = [
	// ================================
	// ACCOUNT OPERATIONS
	// ================================

	// Required Fields for Account Operations
	{
		displayName: 'Account Name or ID',
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
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},

	// Optional Account Fields Section
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['getAccountUsers'],
			},
		},
		options: [
			{
				displayName: 'Store Name or ID',
				name: 'storeId',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getStores',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Whether to Exclude Accountants',
				name: 'excludeAccountants',
				type: 'boolean',
				default: false,
			},
		],
	},

	// Account Update Fields
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['account'],
				operation: ['updateAccount'],
			},
		},
		options: [
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				description: 'Company address',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Company',
				name: 'company',
				type: 'string',
				default: '',
				description: 'Company name',
			},
			{
				displayName: 'Conservatory',
				name: 'conservatory',
				type: 'string',
				default: '',
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
			},
			{
				displayName: 'Fiscal ID',
				name: 'fiscalId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number',
			},
			{
				displayName: 'Postal Code',
				name: 'postalCode',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Social Capital',
				name: 'socialCapital',
				type: 'string',
				default: '',
				description: 'Company Social Capital',
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
				description: 'Tax exemption reason',
			},
			{
				displayName: 'Tax Exemption Law',
				name: 'taxExemptionLaw',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						'/updateFields.taxExemption': ['M01', 'M02', 'M04', 'M05', 'M06', 'M07', 'M10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M19', 'M20', 'M21', 'M25', 'M26', 'M30', 'M31', 'M32', 'M33', 'M34', 'M41', 'M42', 'M43', 'M99'],
					},
				},
				description: 'Tax exemption applicable law (required when exemption is not M40)',
			},
			{
				displayName: 'Tax ID',
				name: 'taxId',
				type: 'options',
				options: [
					{ name: 'Exempt', value: 'ISE' },
					{ name: 'Intermediate Rate', value: 'INT' },
					{ name: 'Normal Rate', value: 'NOR' },
					{ name: 'Others', value: 'OUT' },
					{ name: 'Reduced Rate', value: 'RED' },
				],
				default: 'NOR',
				description: 'Default tax rate',
			},
		],
	},

	// Custom JSON for Account
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
	},

	// ================================
	// CLIENT OPERATIONS - OPTIMIZED
	// ================================

	// Required Fields for Client Operations
	{
		displayName: 'Client Name or ID',
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
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},

	// Required: Client Name for Create/Update
	{
		displayName: 'Client Name',
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
	},

	// Optional Client Search and Filter Options
	{
		displayName: 'Search & Filter Options',
		name: 'searchOptions',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['getClients'],
			},
		},
		options: [
			{
				displayName: 'Fiscal ID',
				name: 'fiscalId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Search Query',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Search string for clients',
			},
		],
	},

	// Client Contact Information
	{
		displayName: 'Contact Information',
		name: 'contactInfo',
		type: 'collection',
		placeholder: 'Add Contact Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		options: [
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				description: 'Email address',
			},
			{
				displayName: 'Fiscal ID',
				name: 'fiscalId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Mobile',
				name: 'mobile',
				type: 'string',
				default: '',
				description: 'Mobile number',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				description: 'Phone number',
			},
			{
				displayName: 'Website',
				name: 'website',
				type: 'string',
				default: '',
				description: 'Website URL',
			},
		],
	},

	// Client Address Information
	{
		displayName: 'Address Information',
		name: 'addressInfo',
		type: 'collection',
		placeholder: 'Add Address Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		options: [
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				description: 'Client address',
			},
			{
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'options',
				options: [
					{ name: 'Angola', value: 'AO' },
					{ name: 'France', value: 'FR' },
					{ name: 'Portugal', value: 'PT' },
					{ name: 'Spain', value: 'ES' },
				],
				default: 'PT',
				description: 'Country code using ISO 3166-1 alpha-2',
			},
			{
				displayName: 'Postal Code',
				name: 'postalcode',
				type: 'string',
				default: '',
			},
		],
	},

	// Client Business Settings
	{
		displayName: 'Business Settings',
		name: 'businessSettings',
		type: 'collection',
		placeholder: 'Add Business Setting',
		default: {},
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient'],
			},
		},
		options: [
			{
				displayName: 'Default Pay Due',
				name: 'defaultPayDue',
				type: 'options',
				options: [
					{ name: '1 Day', value: '1' },
					{ name: '7 Days', value: '7' },
					{ name: '15 Days', value: '15' },
					{ name: '30 Days', value: '30' },
					{ name: '45 Days', value: '45' },
					{ name: '60 Days', value: '60' },
					{ name: '90 Days', value: '90' },
					{ name: 'Now', value: 'now' },
				],
				default: '15',
				description: 'Default payment due period',
			},
			{
				displayName: 'IRS Retention',
				name: 'irsRetention',
				type: 'options',
				options: [
					{ name: 'No', value: 'no' },
					{ name: 'Yes', value: 'yes' },
				],
				default: 'no',
				description: 'Whether client does IRS retention',
			},
			{
				displayName: 'Price Group Name or ID',
				name: 'priceGroupId',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPriceGroups',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Send Email',
				name: 'sendEmail',
				type: 'options',
				options: [
					{ name: 'No', value: 'no' },
					{ name: 'Yes', value: 'yes' },
				],
				default: 'yes',
				description: 'Send invoice by email',
			},
		],
	},

	// Additional Client Options
	{
		displayName: 'Additional Options',
		name: 'additionalClientOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
		options: [
			{
				displayName: 'External Reference',
				name: 'externalReference',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Notes about the client',
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
				description: 'Client status',
				displayOptions: {
					show: {
						'/operation': ['updateClient'],
					},
				},
			},
		],
	},

	// Client Custom JSON
	{
		displayName: 'Custom JSON',
		name: 'clientCustomJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['createClient', 'updateClient'],
			},
		},
	},

	// ================================
	// PRODUCT OPERATIONS - FULLY OPTIMIZED
	// ================================

	// Required Fields for Product Operations
	{
		displayName: 'Product Name or ID',
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
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},

	// Required: Product Title
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

	// Required: Unit ID for Product Creation (with dynamic loading)
	{
		displayName: 'Unit Name or ID',
		name: 'unitId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getProductUnits',
		},
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct'],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},

	// Product Search Options
	{
		displayName: 'Search Options',
		name: 'productSearchOptions',
		type: 'collection',
		placeholder: 'Add Search Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['getProducts'],
			},
		},
		options: [
			{
				displayName: 'Search Query',
				name: 'q',
				type: 'string',
				default: '',
				description: 'Search string for products',
			},
		],
	},

	// Product Basic Information
	{
		displayName: 'Basic Information',
		name: 'basicInfo',
		type: 'collection',
		placeholder: 'Add Basic Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		options: [
			{
				displayName: 'Barcode',
				name: 'barcode',
				type: 'string',
				default: '',
				description: 'Product barcode',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Product description',
			},
			{
				displayName: 'Reference',
				name: 'reference',
				type: 'string',
				default: '',
				description: 'Product reference code',
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
				description: 'Product status',
			},
			{
				displayName: 'Type',
				name: 'typeId',
				type: 'options',
				options: [
					{ name: 'Other', value: 'O' },
					{ name: 'Product', value: 'P' },
					{ name: 'Service', value: 'S' },
					{ name: 'Special Consumption Tax', value: 'E' },
					{ name: 'Tax', value: 'I' },
				],
				default: 'P',
				description: 'Product type',
			},
		],
	},

	// Product Categorization (with dynamic loading)
	{
		displayName: 'Categorization',
		name: 'categorization',
		type: 'collection',
		placeholder: 'Add Category Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		options: [
			{
				displayName: 'Brand Name or ID',
				name: 'brandId',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getProductBrands',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Category Name or ID',
				name: 'categoryId',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getProductCategories',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Class',
				name: 'classId',
				type: 'options',
				options: [
					{ name: 'Alcohol and Tobacco', value: 'ALT' },
					{ name: 'Computer and Electronics', value: 'PCS' },
					{ name: 'Cultural Products', value: 'CUL' },
					{ name: 'Fashion and Accessories', value: 'MOD' },
					{ name: 'Food', value: 'ALI' },
					{ name: 'Home Appliances', value: 'EDM' },
					{ name: 'Home Products', value: 'CAS' },
					{ name: 'Jewelry and Watches', value: 'JOI' },
					{ name: 'Perfumery and Cosmetics', value: 'PER' },
					{ name: 'Sports and Leisure', value: 'DEP' },
				],
				default: 'ALI',
				description: 'Product class',
			},
		],
	},

	// Product Pricing
	{
		displayName: 'Pricing',
		name: 'pricing',
		type: 'collection',
		placeholder: 'Add Price Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		options: [
			{
				displayName: 'Gross Price',
				name: 'grossPrice',
				type: 'string',
				default: '',
				description: 'Product gross price',
			},
			{
				displayName: 'Supply Price',
				name: 'supplyPrice',
				type: 'string',
				default: '',
				description: 'Product supply price',
			},
		],
	},

	// Product Stock Management
	{
		displayName: 'Stock Management',
		name: 'stockManagement',
		type: 'collection',
		placeholder: 'Add Stock Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		options: [
			{
				displayName: 'Stock Control',
				name: 'stockControl',
				type: 'options',
				options: [
					{ name: 'No', value: 0 },
					{ name: 'Yes', value: 1 },
				],
				default: 1,
				description: 'Enable stock control',
			},
			{
				displayName: 'Stock Type',
				name: 'stockType',
				type: 'options',
				options: [
					{ name: 'By-Products', value: 'S' },
					{ name: 'Finished Products', value: 'A' },
					{ name: 'Merchandise', value: 'M' },
					{ name: 'Raw Materials', value: 'P' },
					{ name: 'Work in Progress', value: 'T' },
				],
				default: 'M',
				displayOptions: {
					show: {
						'/stockManagement.stockControl': [1],
					},
				},
			},
		],
	},

	// Product Tax Information
	{
		displayName: 'Tax Information',
		name: 'taxInfo',
		type: 'collection',
		placeholder: 'Add Tax Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
		options: [
			{
				displayName: 'Tax Rate',
				name: 'taxId',
				type: 'options',
				options: [
					{ name: 'Exempt', value: 'ISE' },
					{ name: 'Intermediate Rate', value: 'INT' },
					{ name: 'Normal Rate', value: 'NOR' },
					{ name: 'Others', value: 'OUT' },
					{ name: 'Reduced Rate', value: 'RED' },
				],
				default: 'NOR',
				description: 'Product tax rate',
			},
		],
	},

	// Product Custom JSON
	{
		displayName: 'Custom JSON',
		name: 'productCustomJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProduct', 'updateProduct'],
			},
		},
	},

	// ================================
	// PRODUCT BRAND CREATION FIELDS
	// ================================

	// Required: Brand Name
	{
		displayName: 'Brand Name',
		name: 'brandName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProductBrand'],
			},
		},
		description: 'Name of the product brand',
	},

	// Brand Additional Information
	{
		displayName: 'Brand Information',
		name: 'brandInfo',
		type: 'collection',
		placeholder: 'Add Brand Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProductBrand'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Brand description',
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
				description: 'Brand status',
			},
		],
	},

	// ================================
	// PRODUCT CATEGORY CREATION FIELDS
	// ================================

	// Required: Category Name
	{
		displayName: 'Category Name',
		name: 'categoryName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProductCategory'],
			},
		},
		description: 'Name of the product category',
	},

	// Category Additional Information
	{
		displayName: 'Category Information',
		name: 'categoryInfo',
		type: 'collection',
		placeholder: 'Add Category Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['createProductCategory'],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Category description',
			},
			{
				displayName: 'Parent Category Name or ID',
				name: 'parentId',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getProductCategories',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
				description: 'Category status',
			},
		],
	},

	// ================================
	// PRODUCT STOCK UPDATE FIELDS
	// ================================

	// Product Stock Update Information
	{
		displayName: 'Stock Update Information',
		name: 'stockUpdateInfo',
		type: 'collection',
		placeholder: 'Add Stock Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['product'],
				operation: ['updateProductStock'],
			},
		},
		options: [
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Notes about the stock update',
			},
			{
				displayName: 'Operation Type',
				name: 'operationType',
				type: 'options',
				options: [
					{ name: 'Add Stock', value: 'add' },
					{ name: 'Remove Stock', value: 'remove' },
					{ name: 'Set Stock', value: 'set' },
				],
				default: 'set',
				description: 'Type of stock operation',
			},
			{
				displayName: 'Product Name or ID',
				name: 'productId',
				type: 'string',
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Quantity',
				name: 'quantity',
				type: 'string',
				default: '',
				description: 'Stock quantity to update',
			},
			{
				displayName: 'Store Name or ID',
				name: 'storeId',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getStores',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
		],
	},

	// ================================
	// DOCUMENT OPERATIONS - OPTIMIZED
	// ================================

	// Required Fields for Document Operations
	{
		displayName: 'Document Name or ID',
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
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},

	// Required: Document Type (with dynamic loading)
	{
		displayName: 'Document Type Name or ID',
		name: 'type',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getDocumentTypes',
		},
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},

	// Document Search and Filter Options
	{
		displayName: 'Search & Filter Options',
		name: 'documentSearchOptions',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['getDocuments'],
			},
		},
		options: [
			{
				displayName: 'Register ID',
				name: 'registerId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Store Name or ID',
				name: 'storeId',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getStores',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
		],
	},

	// Required Client for Document Creation
	{
		displayName: 'Client Name or ID',
		name: 'clientId',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getClients',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},

	// Document Basic Information
	{
		displayName: 'Document Information',
		name: 'documentInfo',
		type: 'collection',
		placeholder: 'Add Document Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		options: [
			{
				displayName: 'Date',
				name: 'date',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD',
				description: 'Document date (YYYY-MM-DD). If not set, defaults to current date.',
			},
			{
				displayName: 'Date Due',
				name: 'dateDue',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD',
				description: 'Payment due date (YYYY-MM-DD)',
			},
			{
				displayName: 'Date Supply',
				name: 'dateSupply',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD',
				description: 'Supply date (YYYY-MM-DD). If not set, defaults to current date.',
			},
			{
				displayName: 'External Reference',
				name: 'externalReference',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Document notes',
			},
			{
				displayName: 'Register ID',
				name: 'registerId',
				type: 'string',
				default: '',
			},
		],
	},

	// Document Items
	{
		displayName: 'Document Items',
		name: 'items',
		type: 'fixedCollection',
		placeholder: 'Add Item',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		options: [
			{
				name: 'itemsValues',
				displayName: 'Item',
				values: [
					{
						displayName: 'Discount',
						name: 'discount',
						type: 'string',
						default: '0',
						description: 'Discount percentage',
					},
					{
						displayName: 'Product Name or ID',
						name: 'productId',
						type: 'string',
						default: '',
							required:	true,
						description: 'Product ID or reference',
					},
					{
						displayName: 'Quantity',
						name: 'quantity',
						type: 'string',
						default: '1',
							required:	true,
						description: 'Quantity of the product',
					},
					{
						displayName: 'Tax Rate',
						name: 'taxRate',
						type: 'options',
						options: [
							{
								name: 'Exempt',
								value: 'ISE',
							},
							{
								name: 'Intermediate Rate',
								value: 'INT',
							},
							{
								name: 'Normal Rate',
								value: 'NOR',
							},
							{
								name: 'Others',
								value: 'OUT',
							},
							{
								name: 'Reduced Rate',
								value: 'RED',
							},
						],
						default: 'NOR',
						description: 'Tax rate for the item',
					},
					{
						displayName: 'Unit Price',
						name: 'unitPrice',
						type: 'string',
						default: '',
						description: 'Unit price of the product',
					},
			],
			},
		],
	},

	// Document Options
	{
		displayName: 'Document Options',
		name: 'documentOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
		options: [
			{
				displayName: 'Output Format',
				name: 'output',
				type: 'options',
				options: [
					{ name: 'Auto', value: 'auto' },
					{ name: 'ESC/POS', value: 'escpos' },
					{ name: 'HTML', value: 'html' },
					{ name: 'PDF', value: 'pdf' },
					{ name: 'PDF URL', value: 'pdf_url' },
					{ name: 'TPA SIBS', value: 'tpasibs' },
				],
				default: 'html',
				description: 'Printable output format',
			},
			{
				displayName: 'Stock Operation',
				name: 'stockOperation',
				type: 'options',
				options: [
					{ name: 'Decrement Stock', value: 'out' },
					{ name: 'Don\'t Change Stock', value: 'none' },
					{ name: 'Increment Stock', value: 'in' },
				],
				default: 'out',
				description: 'Operation on items with stock control',
			},
		],
	},

	// Document Update Status
	{
		displayName: 'Document Status',
		name: 'documentStatus',
		type: 'options',
		options: [
			{ name: 'Canceled', value: 'A' },
			{ name: 'Invoiced', value: 'F' },
			{ name: 'Normal', value: 'N' },
		],
		default: 'N',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['updateDocument'],
			},
		},
	},

	// Document Custom JSON
	{
		displayName: 'Custom JSON',
		name: 'documentCustomJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createDocument'],
			},
		},
	},

	// ================================
	// PAYMENT METHOD CREATION FIELDS
	// ================================

	// Required: Payment Method Name
	{
		displayName: 'Payment Method Name',
		name: 'paymentMethodName',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createPaymentMethod'],
			},
		},
		description: 'Name of the payment method',
	},

	// Payment Method Information
	{
		displayName: 'Payment Method Information',
		name: 'paymentMethodInfo',
		type: 'collection',
		placeholder: 'Add Payment Method Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createPaymentMethod'],
			},
		},
		options: [
			{
				displayName: 'Code',
				name: 'code',
				type: 'string',
				default: '',
				description: 'Payment method code',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Payment method description',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				options: [
					{ name: 'Bank Transfer', value: 'bank_transfer' },
					{ name: 'Cash', value: 'cash' },
					{ name: 'Check', value: 'check' },
					{ name: 'Credit Card', value: 'credit_card' },
					{ name: 'Debit Card', value: 'debit_card' },
					{ name: 'Digital Wallet', value: 'digital_wallet' },
					{ name: 'Other', value: 'other' },
				],
				default: 'cash',
				description: 'Type of payment method',
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
				description: 'Payment method status',
			},
		],
	},

	// Payment Method Custom JSON
	{
		displayName: 'Custom JSON',
		name: 'paymentMethodCustomJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['document'],
				operation: ['createPaymentMethod'],
			},
		},
	},

	// ================================
	// RECEIPT OPERATIONS
	// ================================

	{
		displayName: 'Receipt Name or ID',
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
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},

	// Required: Receipt Information for Creation
	{
		displayName: 'Receipt Information',
		name: 'receiptInfo',
		type: 'collection',
		placeholder: 'Add Receipt Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['receipt'],
				operation: ['createReceipt'],
			},
		},
		options: [
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'string',
				default: '',
				description: 'Receipt amount',
			},
			{
				displayName: 'Client Name or ID',
				name: 'clientId',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getClients',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD',
				description: 'Receipt date (YYYY-MM-DD). If not set, defaults to current date.',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Receipt description',
			},
			{
				displayName: 'Payment Method Name or ID',
				name: 'paymentMethodId',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getPaymentMethods',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
		],
	},

	// Receipt Update Fields
	{
		displayName: 'Update Fields',
		name: 'receiptUpdateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['receipt'],
				operation: ['updateReceipt'],
			},
		},
		options: [
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'string',
				default: '',
				description: 'Receipt amount',
			},
			{
				displayName: 'Date',
				name: 'date',
				type: 'string',
				default: '',
				placeholder: 'YYYY-MM-DD',
				description: 'Receipt date (YYYY-MM-DD)',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Receipt description',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'Active', value: 'active' },
					{ name: 'Canceled', value: 'canceled' },
					{ name: 'Paid', value: 'paid' },
				],
				default: 'active',
				description: 'Receipt status',
			},
		],
	},

	// Receipt Custom JSON
	{
		displayName: 'Custom JSON',
		name: 'receiptCustomJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['receipt'],
				operation: ['createReceipt', 'updateReceipt'],
			},
		},
	},

	// ================================
	// STORE OPERATIONS
	// ================================

	{
		displayName: 'Store Name or ID',
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
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},

	// ================================
	// SUPPLIER OPERATIONS - OPTIMIZED
	// ================================

	// Required Fields for Supplier Operations
	{
		displayName: 'Supplier Name or ID',
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
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},

	// Required: Supplier Name
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

	// Supplier Contact Information
	{
		displayName: 'Contact Information',
		name: 'supplierContactInfo',
		type: 'collection',
		placeholder: 'Add Contact Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
		options: [
			{
				displayName: 'Email',
				name: 'supplierEmail',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Fiscal ID',
				name: 'supplierFiscalId',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Mobile',
				name: 'supplierMobile',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Phone',
				name: 'supplierPhone',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Website',
				name: 'supplierWebsite',
				type: 'string',
				default: '',
			},
		],
	},

	// Supplier Address Information
	{
		displayName: 'Address Information',
		name: 'supplierAddressInfo',
		type: 'collection',
		placeholder: 'Add Address Info',
		default: {},
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
		options: [
			{
				displayName: 'Address',
				name: 'supplierAddress',
				type: 'string',
				default: '',
			},
			{
				displayName: 'City',
				name: 'supplierCity',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Country',
				name: 'supplierCountry',
				type: 'options',
				options: [
					{ name: 'Angola', value: 'AO' },
					{ name: 'France', value: 'FR' },
					{ name: 'Portugal', value: 'PT' },
					{ name: 'Spain', value: 'ES' },
				],
				default: 'PT',
			},
			{
				displayName: 'Postal Code',
				name: 'supplierPostalCode',
				type: 'string',
				default: '',
			},
		],
	},

	// Additional Supplier Options
	{
		displayName: 'Additional Options',
		name: 'supplierAdditionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
		options: [
			{
				displayName: 'Notes',
				name: 'supplierNotes',
				type: 'string',
				default: '',
			},
		],
	},

	// Supplier Custom JSON
	{
		displayName: 'Custom JSON',
		name: 'supplierCustomJson',
		type: 'json',
		default: '{}',
		displayOptions: {
			show: {
				resource: ['supplier'],
				operation: ['createSupplier', 'updateSupplier'],
			},
		},
	},
];


