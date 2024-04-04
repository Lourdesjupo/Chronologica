Para poder crear una celda personalizada en las columnas:

- crear un campo renderCell: renderXXXX  ( función )
- La función recibe p la cual accede a las propiedades de row y desde aqui se puede indicar el p.row.color y p.row.name

```
const columns = [
    {
      field: 'name',
      headerName: 'Nombre de tarea',
      width: 200,
      editable: false,
      renderCell:renderName  
    },
    ...]

    const renderName = (p) => {
    return (<>
    <Box    
    display="flex" 
    >
     <Paper 
     variant='outlined'
     sx={{ width: 10, backgroundColor: p.row.color, mr: 2 }}
     />
        {p.row.name}
    </Box>
    </>

    )
  };
```