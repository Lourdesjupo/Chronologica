
import Box from '@mui/material/Box';
import { DataGrid,GridToolbarContainer,GridToolbarExport  } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { getTrackedListTasks } from '../services/ApiTrackedTime';
import { CircularProgress, Typography } from '@mui/material';              






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
        el.elapsedTime = Math.round(el.elapsedTime)
        if(el.estimatedTime){  
          el.remain = Math.round(el.estimatedTime - el.elapsedTime)
          el.progress = Math.round((el.elapsedTime * 100) /el.estimatedTime)
        }
      })
    setTrackedList(data)
    console.log('reportData:', data)
    })
  },[])

 
  const renderProgress = (p)=>{ 
    console.log(p, 'manola: ', p.row.color)
  if(!p.row.estimatedTime){
    return 
  } else{
    return  (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" color='secondary' {...p} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color='secondary'>
            {`${Math.round(p.row.progress)}%`}
          </Typography>
        </Box>
      </Box>
    );
    //<CircularProgress variant="determinate" value={p.row.progress} />
  }
  
  }
 //dedicación media por sesión, nº de días diferentes dedicados. En el último mes X , en el ultimo dos meses XX
  const columns = [  
  {
    field: 'name',
    headerName: 'Nombre de tarea',
    width: 200,
    editable: false,
  },
  {
    field: 'elapsedTime',
    headerName: 'Minutos dedicados',
    type: 'number',
    width: 200,
    headerAlign: 'center',
    editable: false,
  },
  {
    field: 'remain',
    headerName: 'Minutos restantes',
    type: 'number',
    width: 200,
    headerAlign: 'center',
    editable: false,
  },
  {
    field: 'progress',
    headerName: 'Progreso',
    renderCell: renderProgress,
    headerAlign: 'center',
    width: 200,
  }
];


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
        sx={{ '--DataGrid-overlayHeight': '300px'}}
        checkboxSelection={false}
        disableRowSelectionOnClick
        pageSizeOptions={[10]}
        density={'comfortable'}
      />
    
    </Box>
  );
}

export default TrackedTimeReport