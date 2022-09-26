import React, { useState } from 'react';
import * as MUI from '@mui/material';
import { Link } from 'react-router-dom';
import { Launch, LaunchListProps } from './launches.interface';
import { COMM } from '../../helpers/common';
import { axiosInstance } from '../../services/axios';
import { useSnackbar } from 'notistack';
import { useQuery } from '@apollo/client';
import { GET_TOTAL_LAUNCHES } from './launches.gql';

import VisibilityIcon from '@mui/icons-material/Visibility';
import ScaleIcon from '@mui/icons-material/Scale';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SearchIcon from '@mui/icons-material/Search';
import CalculateIcon from '@mui/icons-material/Calculate';
import LaunchesModal from './Launches.modal';
import LaunchListSort from './Launches.list.sort';
import LoadingList from '../Loading/Loading.List';

function LaunchesList({ launches, setVariables, variables, getLaunches, lazyloading }: LaunchListProps) {
    const totalCount = useQuery(GET_TOTAL_LAUNCHES);
    console.log(totalCount, 'totalCount');
    const { enqueueSnackbar } = useSnackbar();
    const [page, setPage] = useState<number>(1);
    const [modal, setModal] = useState<boolean>(false);
    const [calculatedLaunch, setCalculatedLaunch] = useState<Launch[]>([]);
    const [rocketToEstimate, setRocketToEstimate] = useState<Launch[]>([]);
    const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
        setVariables({ ...variables, offset: (page - 1) * variables.limit });
    };
    const onCheckBoxHandler = (event: React.ChangeEvent<HTMLInputElement>, launch: Launch) => {
        let newArr: Launch[] = [...rocketToEstimate];
        if (event.target.checked) {
            newArr.push(launch);
        } else {
            newArr = newArr.filter(function (el) {
                return el.id !== launch.id;
            });
        }
        setRocketToEstimate(newArr);
    };
    const sendForEstimation = () => {
        if (rocketToEstimate.length) {
            setModal(true);
            axiosInstance
                .post('/fetch', { data: rocketToEstimate })
                .then((res: any) => {
                    setCalculatedLaunch(res.data);
                })
                .catch((err: any) => {
                    enqueueSnackbar(`Error 23-69: Something when wrong. Please try again. ${err}`, { variant: 'error' });
                });
        } else {
            enqueueSnackbar(`Please select a Launch Mission to start calculation.`, { variant: 'warning' });
        }
    };
    const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVariables({ ...variables, find: event.target.value });
    };
    const searchKeyPress = (event: React.KeyboardEvent) => {
        if (event.keyCode === 13) {
            getLaunches();
        }
    };
    return (
        <MUI.Card className="card-box">
            <div className="card-header bg-white">
                <div className="card-header--title">
                    <small className="d-block text-uppercase mt-1">Rocket</small>
                    <b>Mission List</b>
                </div>
                <div className="card-header--actions">
                    <MUI.Button onClick={sendForEstimation} size="small" className="btn-neutral-primary p-3">
                        <span className="btn-wrapper--icon">
                            <CalculateIcon />
                        </span>
                        <span className="btn-wrapper--label">Calculate Energy Consumption</span>
                    </MUI.Button>
                </div>
            </div>
            <div className="card-header bg-white">
                <div className="card-header--title">
                    <div className="search-wrapper">
                        <MUI.TextField
                            value={variables.find}
                            onChange={onSearchHandler}
                            onKeyDown={searchKeyPress}
                            variant="outlined"
                            size="small"
                            id="input-search"
                            InputProps={{
                                startAdornment: (
                                    <MUI.InputAdornment position="start">
                                        <SearchIcon />
                                    </MUI.InputAdornment>
                                )
                            }}
                        />
                    </div>
                </div>
                <LaunchListSort setVariables={setVariables} variables={variables} getLaunches={getLaunches} />
            </div>
            <div className="scroll-area-lg shadow-overflow">
                {lazyloading ? (
                    <LoadingList />
                ) : (
                    <MUI.List component="div" className="list-group-flush">
                        {launches.map((launch: Launch) => (
                            <MUI.ListItem key={launch.id} className="py-4 d-block">
                                <div className="d-flex justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <MUI.Checkbox onChange={(e) => onCheckBoxHandler(e, launch)} />
                                        </div>
                                        <div>
                                            <MUI.Card className="card-transparent mb-3 mb-sm-0">
                                                <a href="#/" onClick={(e) => e.preventDefault()} className="card-img-wrapper card-box-hover-rise rounded-sm">
                                                    <img
                                                        alt="..."
                                                        className="card-img-top rounded-sm"
                                                        src={launch.links && launch.links.flickr_images ? launch.links.flickr_images[0] : launch.links && launch.links.mission_patch_small}
                                                        style={{ width: 140, height: 100 }}
                                                    />
                                                </a>
                                            </MUI.Card>
                                        </div>
                                        <div className="pl-0 pl-sm-4">
                                            <b className="font-weight-bold font-size-sm text-black">{launch.mission_name}</b>
                                            <p className="text-black-50 mb-0"></p>
                                            <small className="text-black-50 pt-1 d-block">
                                                Launch Date on: <b className="text-first">{COMM.DdMmmYyyy(launch.launch_date_utc)}</b>
                                            </small>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <ScaleIcon />
                                        <div className="text-right pl-3">
                                            <span className="font-weight-bold font-size-sm text-black-50">{COMM.formatNumber(launch.rocket.rocket.mass.kg)} kg</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <LocalGasStationIcon />
                                        <div className="text-right pl-3">
                                            <span className="font-weight-bold font-size-sm text-black-50">{COMM.formatNumber(launch.rocket.rocket.second_stage.fuel_amount_tons)} tons</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <Link to={`launch/${launch.id}`}>
                                            <MUI.Button className="btn-primary m-2">
                                                <span className="btn-wrapper--icon">
                                                    <VisibilityIcon className="font-size-xs" />
                                                </span>
                                                <span className="btn-wrapper--label">View Mission</span>
                                            </MUI.Button>
                                        </Link>
                                    </div>
                                </div>
                            </MUI.ListItem>
                        ))}
                    </MUI.List>
                )}
            </div>
            <div className="card-footer p-3 border-0 d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-center flex-wrap">
                    {totalCount.loading ? (
                        'loading...'
                    ) : (
                        <MUI.Pagination className="pagination-secondary" count={Math.ceil(totalCount.data.launches.length / variables.limit)} onChange={onChangePage} page={page} />
                    )}
                </div>
                {/* <MUI.TableContainer>
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
                </MUI.TableContainer> */}
            </div>
            <LaunchesModal open={modal} onClose={setModal} calculatedLaunch={calculatedLaunch} />
        </MUI.Card>
    );
}

export default LaunchesList;
