import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';
import { pink } from '@mui/material/colors';
import { deleteManager } from '../../../actions/managers';
import {useDispatch} from 'react-redux'
const Manager = ({manager,setCurrentId}) => {
  const dispatch = useDispatch()
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth:100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Occupation&nbsp;(S or O))</TableCell>
              <TableCell align="right">Address&nbsp;(1)</TableCell>
              <TableCell align="right">Address&nbsp;(2)</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {manager.firstName}
                </TableCell>
                <TableCell align="right">{manager.lastName}</TableCell>
                <TableCell align="right">{manager.occupation}</TableCell>
                <TableCell align="right">{manager.address1}</TableCell>
                <TableCell align="right">{manager.address2}</TableCell>
                <TableCell align="right">{manager.email}</TableCell>
                <TableCell align="right">{manager.phone}</TableCell>
                <TableCell align="right">{manager.website}</TableCell>
                <Button size="small" sx={{ color: pink[500] }} onClick={() => dispatch(deleteManager(manager._id))}><DeleteIcon fontSize="small" /> Delete</Button>
                <Button size="small" color="primary" onClick={()=>setCurrentId(manager._id)} ><EditIcon fontSize="small" /> Edit</Button>



              </TableRow>
            )
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default Manager


