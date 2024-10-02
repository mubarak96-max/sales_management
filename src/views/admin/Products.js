import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { products } from 'assets/data/products';
import { Avatar, Button } from '@mui/material';
import { useHistory } from 'react-router-dom'

// Define your columns to match your data structure
const columns = [
  { id: 'product_name', label: 'Product', minWidth: 170 },
  { id: 'porduct_image', label: 'Image', minWidth: 170 },
  { id: 'supplier', label: 'Supplier', minWidth: 170 },
  // { id: 'stock', label: 'Stock', minWidth: 170 },
  { id: 'price', label: 'Price', minWidth: 170 },
//   { id: 'image', label: 'Image', minWidth: 170 }
];



export default function Products() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const history = useHistory();

  return (
    <div className='mt-2'>

   
        <div className='mt-32 mb-32'> </div>
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop:30 }}>
    <Button variant="contained" sx={{marginY:2, marginLeft:1}} onClick={()=>history.push('/admin/product')}>add product</Button>
      <TableContainer sx={{ maxHeight: 730 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                        {column.id === 'porduct_image' ? (
                          <Avatar alt={row.customer} src={value}  sx={{ width: 60, height: 60 }} />
                        ) : (
                          value
                        )}
                      </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
