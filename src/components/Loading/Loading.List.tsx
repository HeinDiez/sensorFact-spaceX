import React from 'react';
import * as MUI from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import Container from '@mui/material/Container';

function LoadingList() {
    const loadingTimes = [...new Array(12)];
    return ( 
        <div>
            <Container>
                <MUI.TableContainer component={MUI.Paper}>
                    <MUI.Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <MUI.TableHead>
                            <MUI.TableRow>
                                <MUI.TableCell><Skeleton animation="wave" /></MUI.TableCell>
                                <MUI.TableCell align="right"><Skeleton animation="wave" /></MUI.TableCell>
                                <MUI.TableCell align="right"><Skeleton animation="wave" /></MUI.TableCell>
                            </MUI.TableRow>
                        </MUI.TableHead>
                        <MUI.TableBody>
                            {    loadingTimes.map((l, i)=><MUI.TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <MUI.TableCell component="th" scope="row"><Skeleton variant="rectangular" width={210} height={48} /></MUI.TableCell>
                                    <MUI.TableCell align="right"> <Skeleton animation="wave" /></MUI.TableCell>
                                    <MUI.TableCell align="right"> <Skeleton animation="wave" /></MUI.TableCell>
                                </MUI.TableRow>
                            )}
                        </MUI.TableBody>
                    </MUI.Table>
                </MUI.TableContainer>
            </Container>
        </div>
    );
}

export default LoadingList;
