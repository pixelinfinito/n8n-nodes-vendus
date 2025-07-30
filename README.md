# Vendus Node for n8n

> **Developed by [Pixel Infinito](https://pixel.ao)** - Empowering businesses with innovative automation solutions.

This node provides integration with the Vendus API for invoicing and business management.

## Features

- **Account Management**: Get and update account information
- **Client Management**: Create, read, update, and delete clients
- **Document Management**: Create and manage invoices, receipts, and other documents
- **Product Management**: Manage products, categories, brands, and stock
- **Receipt Management**: Handle receipts and payments
- **Store Management**: Get store information
- **Supplier Management**: Manage suppliers

## Authentication

The node uses Request Parameter authentication for the Vendus API:

### Request Parameter Authentication
- Sends your API key as a request parameter (`api_key`)
- This is the recommended authentication method for simplicity and reliability

### Setup Instructions
1. Get your API key from your Vendus account
2. Configure the credentials in n8n
3. Set the base URL (default: https://www.vendus.co.ao/ws/v1.1)

### Troubleshooting Authentication Issues

If you encounter "Authorization failed - please check your credentials" errors:

1. **Verify your API key**: Ensure your API key is correct and active
2. **Check base URL**: Ensure the base URL is correct (https://www.vendus.co.ao/ws/v1.1)
3. **Test with curl**: You can test your API key directly:
   ```bash
   curl https://www.vendus.co.ao/ws/v1.1/account?api_key=YOUR_API_KEY
   ```

## Resources

### Account
- Get Account Info
- Get Account by ID
- Update Account
- Get Account Users

### Client
- Get All Clients
- Get Client by ID
- Create Client
- Update Client
- Delete Client
- Get Client Balance
- Get Client Resume

### Document
- Get All Documents
- Get Document by ID
- Create Document (Invoice, Receipt, etc.)
- Update Document
- Get Payment Methods
- Create Payment Method
- Get Document Types

### Product
- Get All Products
- Get Product by ID
- Create Product
- Update Product
- Delete Product
- Get Product Categories
- Create Product Category
- Get Product Brands
- Create Product Brand
- Get Product Stock
- Update Product Stock

### Receipt
- Get All Receipts
- Get Receipt by ID
- Create Receipt
- Update Receipt

### Store
- Get All Stores
- Get Store by ID

### Supplier
- Get All Suppliers
- Get Supplier by ID
- Create Supplier
- Update Supplier

## Usage Examples

### Creating a Client
1. Select "Client" as the resource
2. Choose "Create Client" operation
3. Fill in the required fields (Name, Fiscal ID)
4. Optionally add additional information
5. Use "Custom JSON" for advanced configurations

### Creating an Invoice
1. Select "Document" as the resource
2. Choose "Create Document" operation
3. Set the document type to "Invoice" (FT)
4. Add client information
5. Add items to the invoice
6. Configure payment methods and due dates

### Managing Products
1. Select "Product" as the resource
2. Choose the appropriate operation
3. Fill in product details
4. Configure pricing and stock information

## Custom JSON

For advanced users, each operation includes a "Custom JSON" field that allows you to override or extend the default payload with additional parameters not covered by the standard fields.

## Error Handling

The node includes comprehensive error handling and will return detailed error messages from the Vendus API when operations fail.

## Rate Limiting

The Vendus API includes rate limiting. The node respects these limits and will handle rate limit responses appropriately.

## Support

For issues with the Vendus API integration, please refer to the official Vendus API documentation: https://www.vendus.co.ao/ws/v1.1/

## Credits

**Developed by [Pixel Infinito](https://pixel.ao)**

Pixel Infinito is a technology company specializing in business automation and digital transformation solutions. We help businesses streamline their operations through innovative software solutions and API integrations.

- **Website**: https://pixel.ao
- **Contact**: info@pixel.ao

---

*This n8n node is part of our commitment to providing high-quality automation tools for the business community.* 
