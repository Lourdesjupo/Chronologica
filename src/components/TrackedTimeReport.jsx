
import Box from '@mui/material/Box';
import { DataGrid,GridToolbarContainer,GridToolbarExport  } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getTrackedListTasks } from '../services/ApiTrackedTime';
import { COMPACT_DENSITY_FACTOR } from '@mui/x-data-grid/hooks/features/density/useGridDensity';


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}


function TrackedTimeReport() {

  const [trackedList,setTrackedList]= useState([])

  useEffect(()=>{
    getTrackedListTasks().then((data)=>{
      data.map((el)=>{
        if(el.estimatedTime){  
          el.remain = Math.round(el.estimatedTime - el.elapsedTime)
          el.progress = Math.round(100-(el.elapsedTime * 100) /el.estimatedTime)
        }
      })
    setTrackedList(data)
    console.log('reportData:', data)
    })
  },[])

  const columns = [  
  {
    field: 'name',
    headerName: 'Nombre de tarea',
    width: 150,
    editable: false,
  },
  {
    field: 'elapsedTime',
    headerName: 'Horas dedicadas',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'remain',
    headerName: 'Horas restantes',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'progress',
    headerName: 'Progreso',
    width: 160,
  }
];
//const rows = trackedList

// const rows = [
//   { id: 1, task: 'Snow', totalHours: 'Jon', remain: 14, progress:'manolo' },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

return( <Box sx={{ width: '100%', height:500}}>

      <DataGrid
        slots={{toolbar: CustomToolbar }}          
        rows={trackedList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize:10,
            },
          },
        }}
        
        checkboxSelection={false}
        disableRowSelectionOnClick
        pageSizeOptions={[10]}
        density={'comfortable'}
      />
    </Box>
  );
}

export default TrackedTimeReport