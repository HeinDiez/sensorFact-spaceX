import React from 'react';
import * as MUI from '@mui/material';
import { LaunchList, Launch, LaunchListProps } from './launches.interface';

function LaunchesList({ launches, setLimit, variables }: LaunchListProps) {
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLimit(parseInt(event.target.value, 10));
    };
    return ( 
        <MUI.TableContainer component={MUI.Paper}>
            <MUI.Table sx={{ minWidth: 650 }} aria-label="simple table">
                <MUI.TableHead>
                    <MUI.TableRow>
                        <MUI.TableCell>Name</MUI.TableCell>
                        <MUI.TableCell align="right">Success</MUI.TableCell>
                        <MUI.TableCell align="right">Details</MUI.TableCell>
                        <MUI.TableCell align="right"></MUI.TableCell>
                    </MUI.TableRow>
                </MUI.TableHead>
                <MUI.TableBody>
                    {   launches.map((launch: Launch)=><MUI.TableRow key={launch.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <MUI.TableCell component="th" scope="row">
                                {launch.mission_name}
                            </MUI.TableCell>
                            <MUI.TableCell align="right">{launch.launch_success ? "Ja": "Nee"}</MUI.TableCell>
                            <MUI.TableCell align="right">{launch.details}</MUI.TableCell>
                            <MUI.TableCell align="right"><MUI.Button size="small">Learn More</MUI.Button></MUI.TableCell>
                        </MUI.TableRow>
                    )}
                </MUI.TableBody>
                <MUI.TableFooter>
                    <MUI.TableRow>
                        <MUI.TablePagination
                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                            colSpan={3}
                            count={100}
                            rowsPerPage={variables.limit}
                            page={1}
                            SelectProps={{
                                inputProps: {
                                'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={()=>{}}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            // ActionsComponent={()=>{}}
                        />
                    </MUI.TableRow>
                </MUI.TableFooter>
            </MUI.Table>
        </MUI.TableContainer>
        
    );
}

export default LaunchesList;
