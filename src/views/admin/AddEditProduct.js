import React, { useState } from 'react';
import { TextField, Box, Paper, Typography, Button } from '@mui/material';
import Swal from 'sweetalert2';

const AddEditProduct = () => {

    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file)); // Create a preview URL
      }
    };
  
    const handleUploadClick = () => {
      document.getElementById('image-upload-input').click(); // Trigger the file input click
    };

  return (

    <Paper sx={{ padding: 2, marginTop:20 }}>

<Button variant="contained" sx={{marginY:3}}>
            Upload CSV
          </Button>

      <Box 
        display="flex" 
        flexDirection="column" 
        gap={2}
      >
        {/* First Row */}
        <Box display="flex" gap={2}>
          <TextField label="Product Name" variant="outlined" />
        
          <Box display="flex" alignItems="center" gap={2}>
          <Button variant="contained" onClick={handleUploadClick}>
            Upload Image
          </Button>
          <input
            type="file"
            id="image-upload-input"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          {image && (
            <Box display="flex" alignItems="center">
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                Selected Image:
              </Typography>
              <img 
                src='' 
                alt="Preview" 
                style={{ width: '100px', height: 'auto', borderRadius: '4px' }} 
              />
            </Box>
          )}
        </Box>
       
        </Box>

        {/* Second Row */}
        <Box display="flex" gap={2}>
          <TextField  label="Brand" variant="outlined" />
          <TextField  label="Supplier" variant="outlined" />
          <TextField f label="Price" variant="outlined" />
        </Box>

        {/* Third Row */}
       
      </Box>

      <Button variant="contained" onClick={()=>{
         Swal.fire({
            title: 'Product added!',
            text: 'Your product has been added',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
      }} sx={{marginY:2}}>
      Submit
          </Button>
    </Paper>
  );
};

export default AddEditProduct
