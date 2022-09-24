import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from './launches.gql';
import { LaunchList, Launch } from './launch.interface';
import LoadingList from '../Loading/Loading.List';
import * as MUI from '@mui/material';

import Container from '@mui/material/Container';

function Launches() {
    const {error, loading, data } = useQuery<LaunchList>(GET_LAUNCHES);
    if (loading){
        return <LoadingList />
    }
    if (error){
        return <div>Something went wrong...</div>
    }
    return ( 
        <div>
            <Container>
                <MUI.TableContainer component={MUI.Paper}>
                    <MUI.Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <MUI.TableHead>
                            <MUI.TableRow>
                                <MUI.TableCell>Name</MUI.TableCell>
                                <MUI.TableCell align="right">Success</MUI.TableCell>
                                <MUI.TableCell align="right">Details</MUI.TableCell>
                            </MUI.TableRow>
                        </MUI.TableHead>
                        <MUI.TableBody>
                            {    data && data.launches.map((launch: Launch)=><MUI.TableRow key={launch.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <MUI.TableCell component="th" scope="row">
                                        {launch.mission_name}
                                    </MUI.TableCell>
                                    <MUI.TableCell align="right">{launch.launch_success ? "Ja": "Nee"}</MUI.TableCell>
                                    <MUI.TableCell align="right">{launch.details}</MUI.TableCell>
                                </MUI.TableRow>
                            )}
                        </MUI.TableBody>
                    </MUI.Table>
                </MUI.TableContainer>
            </Container>
        </div>
    );
}

export default Launches;
