import React from 'react';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';

function LoadingList() {
    const loadingTimes = [...new Array(12)];
    return ( 
        <div>
            <Container>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><Skeleton animation="wave" /></TableCell>
                                <TableCell align="right"><Skeleton animation="wave" /></TableCell>
                                <TableCell align="right"><Skeleton animation="wave" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {    loadingTimes.map((l, i)=><TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row"><Skeleton variant="rectangular" width={210} height={48} /></TableCell>
                                    <TableCell align="right"> <Skeleton animation="wave" /></TableCell>
                                    <TableCell align="right"> <Skeleton animation="wave" /></TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    );
}

export default LoadingList;
