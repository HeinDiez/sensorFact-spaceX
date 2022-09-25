import React from 'react';
import * as MUI from '@mui/material';
import { LaunchList, Launch, LaunchListProps } from './launches.interface';

function LaunchesList({ launches, setLimit, variables }: LaunchListProps) {
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLimit(parseInt(event.target.value, 10));
    };
    return (
        <MUI.Card className="card-box">
            <div className="card-header bg-white">
                <div className="card-header--title">
                    <small className="d-block text-uppercase mt-1">Targets</small>
                    <b>Monthly Stats</b>
                </div>
                <div className="card-header--actions">
                    <MUI.Button onClick={e => e.preventDefault()} size="small" className="btn-neutral-primary">
                        Calculate Fuel consumption
                    </MUI.Button>
                </div>
            </div>
            <div className="scroll-area-lg shadow-overflow">
                <MUI.List component="div" className="list-group-flush">
                    {launches.map((launch: Launch) => (
                        <MUI.ListItem className="py-4 d-block">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <MUI.Card className="card-transparent mb-3 mb-sm-0">
                                            <a href="#/" onClick={e => e.preventDefault()} className="card-img-wrapper card-box-hover-rise rounded-sm">
                                                <img alt="..." className="card-img-top rounded-sm" src={launch.links.flickr_images[0]} style={{ width: 140, height: 100 }} />
                                            </a>
                                        </MUI.Card>
                                    </div>
                                    <div className="pl-0 pl-sm-4">
                                        <b className="font-weight-bold font-size-lg text-black">{launch.mission_name}</b>
                                        <p className="text-black-50 mb-0"></p>
                                        <small className="text-black-50 pt-1 d-block">
                                            Launch Date on: <b className="text-first">{launch.launch_date_utc}</b>
                                        </small>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="text-right pl-3">
                                        <span className="font-weight-bold font-size-lg">{launch.rocket.rocket.mass.kg} kg</span>
                                        <span className="text-black-50 d-block">Mass</span>
                                    </div>
                                </div>
                            </div>
                        </MUI.ListItem>
                    ))}
                </MUI.List>
            </div>
            <div className="card-footer p-3 border-0 d-flex justify-content-between">
                <MUI.TableContainer>
                    <MUI.Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                                            'aria-label': 'rows per page'
                                        },
                                        native: true
                                    }}
                                    onPageChange={() => {}}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    // ActionsComponent={()=>{}}
                                />
                            </MUI.TableRow>
                        </MUI.TableFooter>
                    </MUI.Table>
                </MUI.TableContainer>
            </div>
        </MUI.Card>
    );
}

export default LaunchesList;
