import React from 'react'
import Manager from '../Managers/Manager/Manager'
import {useSelector} from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import { DataGrid } from '@mui/x-data-grid';
import { Grid } from '@material-ui/core';

const Managers = ({setCurrentId}) => {
    const managers = useSelector(state => state.managers)
    console.log(managers)
    // const columns = [
    //     { field: 'id', headerName: 'ID', width: 70 },
    //     { field: 'firstName', headerName: 'First name', width: 130 },
    //     { field: 'lastName', headerName: 'Last name', width: 130 },
    //     {
    //       field: 'age',
    //       headerName: 'Age',
    //       type: 'number',
    //       width: 90,
    //     },
    //     {
    //       field: 'fullName',
    //       headerName: 'Full name',
    //       description: 'This column has a value getter and is not sortable.',
    //       sortable: false,
    //       width: 160,
    //       valueGetter: (params) =>
    //         `${params.getValue(params.id, 'firstName') || ''} ${
    //           params.getValue(params.id, 'lastName') || ''
    //         }`,
    //     },
    //   ];
      
    //   const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 26 },
    //     { id: 6, lastName: 'Melisandre', firstName: 'Dennis', age: 50 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
   
    // ];
    return (
        
       !managers.length? <CircularProgress />:(
        <div>
           <Grid>{managers.map(manager => <Manager key={manager._id} manager={manager} setCurrentId={setCurrentId}/>)}
        
        </Grid>
      </div>
       )
        
        )


    
}

export default Managers

  
