import React, { useState } from 'react';
import { TextField, Box, Paper, Button, MenuItem } from '@mui/material';
import Swal from 'sweetalert2';
import { suppliers } from 'assets/data/suppliers';
import { products } from 'assets/data/products';
import { customers } from 'assets/data/customers';

const Sale = () => {
//   const [image, setImage] = useState(null);
  const [selectedSupplier, setSelectedSupplier] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file)); // Create a preview URL
//     }
//   };

//   const handleUploadClick = () => {
//     document.getElementById('image-upload-input').click(); // Trigger the file input click
//   };

  const handleSupplierChange = (event) => {
    const supplierName = event.target.value.toLowerCase(); // Convert selected value to lowercase
    setSelectedSupplier(supplierName);

    // Filter products where the supplier name (in lowercase) matches the selected supplier
    const productsForSupplier = products.filter((product) =>
      product.supplier.toLowerCase() === supplierName
    );
    setFilteredProducts(productsForSupplier);
  };

  console.log('filteerd', filteredProducts)

  return (
    <Paper sx={{ padding: 2, marginTop: 20 }}>
      <Box display="flex" flexDirection="column" gap={2}>
        {/* First Row */}
        <Box display="flex" gap={2}>
          <TextField label="Customer" variant="outlined" select sx={{ width: '200px' }}>
            {customers?.map((customer) => (
              <MenuItem key={customer.id} value={customer.customer}>
                {customer.customer}
              </MenuItem>
            ))}
          </TextField>

          {/* Supplier Dropdown */}
          <TextField
            label="Supplier"
            variant="outlined"
            select
            sx={{ width: '200px' }}
            value={selectedSupplier}
            onChange={handleSupplierChange}
          >
            {suppliers?.map((supplier) => (
              <MenuItem key={supplier.id} value={supplier.supplier.toLowerCase()}>
                {supplier.supplier}
              </MenuItem>
            ))}
          </TextField>

          {/* Phone Number and Amount Fields */}
          <TextField label="Phone Number" variant="outlined" />
          <TextField label="Amount" variant="outlined" />
        </Box>

        {/* Second Row */}
        <Box display="flex" gap={2}>
          <TextField label="Location" variant="outlined" />

          {/* Conditionally show Products dropdown */}
          {selectedSupplier && (
            <TextField label="Products" variant="outlined" select sx={{ width: '200px' }}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <MenuItem key={product.id} value={product.id}>
                    {product.product_name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No products available</MenuItem>
              )}
            </TextField>
          )}

          <TextField label="Price" variant="outlined" />
        </Box>
      </Box>

      <Button
        variant="contained"
        sx={{ marginY: 2 }}
        onClick={() => {
          Swal.fire({
            title: 'Sale Created!',
            text: 'The sale has been initiated',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
        }}
      >
        Create Sale
      </Button>
    </Paper>
  );
};

export default Sale;
