import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function Table({data}) {

  data = data.map(item=>{
    const {address, company, ...rest} = item;
    return rest;
  })

  const columns = Object.keys(data[0]).map((key) => {
      return {
        field: key,
        headerName: key,
        editable: true,
      }
    })
  
  const rows = data.map((item, index) => {
    return {
      id: index,
      ...item
    }
  })

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[20]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
