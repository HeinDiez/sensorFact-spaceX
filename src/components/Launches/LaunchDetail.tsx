import React from 'react';
import * as MUI from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_LAUNCH } from './launches.gql';
import { Launch } from './launches.interface';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import { COMM } from '../../helpers/common';

export default function LaunchDetail() {
    const { id } = useParams();
    const { error, loading, data } = useQuery<{ launch: Launch }>(GET_LAUNCH, {
        variables: { id }
    });
    return (
        <div className="my-4 pre-scrollable">
            <Container>
                <React.Fragment>
                    <div className="app-inner-content-layout rounded">
                        <div className="app-inner-content-layout--main bg-transparent p-0">
                            <div className="hero-wrapper mx-5 rounded-bottom shadow-xxl bg-composed-wrapper bg-second">
                                <div className="flex-grow-1 w-100 d-flex align-items-center">
                                    <div className="bg-composed-wrapper--bg rounded-bottom bg-deep-sky opacity-4" />
                                    <div className="bg-composed-wrapper--content px-3 pt-5">
                                        <div className="d-block d-md-flex align-items-start">
                                            <div className="dropzone rounded-circle shadow-sm-dark mr-md-3">
                                                <div className="avatar-icon-wrapper d-140 rounded-circle m-2">
                                                    <MUI.Avatar
                                                        alt={data && data.launch.links.mission_patch_small}
                                                        src={data && data.launch.links.mission_patch_small}
                                                        sx={{ width: '100%', height: '100%' }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex text-white flex-column pl-md-2">
                                                <div className="d-block d-md-flex align-items-center">
                                                    <div className="my-3 my-md-0">
                                                        <div className="d-flex align-items-end">
                                                            <div className="font-size-xxl font-weight-bold">{data && data.launch.mission_name}</div>
                                                        </div>
                                                        <div className="font-weight-bold mt-1 font-size-lg text-white-50">{data && data.launch.rocket.rocket.name}</div>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <MUI.Button
                                                            size="small"
                                                            className="btn-first mr-4 shadow-none rounded-lg text-uppercase line-height-1 font-weight-bold font-size-xs px-3 w-auto py-0 d-40"
                                                        >
                                                            Profile
                                                        </MUI.Button>
                                                        <MUI.Button
                                                            size="small"
                                                            className="btn-first mr-4 shadow-none rounded-lg text-uppercase line-height-1 font-weight-bold font-size-xs px-3 w-auto py-0 d-40"
                                                        >
                                                            History
                                                        </MUI.Button>
                                                        <MUI.Button className="btn-icon rounded-lg shadow-none hover-scale-lg d-40 p-0 btn-success">
                                                            <ThreeDRotation className="d-20" />
                                                        </MUI.Button>
                                                    </div>
                                                </div>
                                                <div className="d-flex font-size-xl py-4 align-items-center">
                                                    <div className="mr-2">
                                                        {data && COMM.formatNumber(data.launch.rocket.rocket.mass.kg)} <span className="font-size-sm text-white-50">kg/Mass</span>
                                                    </div>
                                                    <div className="mr-2">
                                                        {data && COMM.formatNumber(data.launch.rocket.rocket.second_stage.fuel_amount_tons)}{' '}
                                                        <span className="font-size-sm text-white-50">tons/fuel</span>
                                                    </div>
                                                    <div className="mr-2">
                                                        {data && COMM.formatNumber(4433)} <span className="font-size-sm text-white-50">issues</span>
                                                    </div>
                                                </div>
                                                <div className="font-size-lg">{data && data.launch.details}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </Container>
        </div>
    );
}
