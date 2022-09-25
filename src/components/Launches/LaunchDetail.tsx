import React from 'react';
import * as MUI from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_LAUNCH } from './launches.gql';
import { Launch } from './launches.interface';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import ScaleIcon from '@mui/icons-material/Scale';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import RocketIcon from '@mui/icons-material/Rocket';
import { COMM } from '../../helpers/common';

export default function LaunchDetail() {
    const { id } = useParams();
    const { error, loading, data } = useQuery<{ launch: Launch }>(GET_LAUNCH, {
        variables: { id }
    });
    console.log(data, 'check here');
    if (loading) {
        return <div>Loading please wait...</div>;
    }
    if (error) {
        return <div>Oh uh, something went wrong...</div>;
    }
    return (
        <div className="my-4 pre-scrollable">
            <Container>
                <React.Fragment>
                    <div className="app-inner-content-layout rounded">
                        <div className="app-inner-content-layout--main bg-transparent p-0">
                            <div className="hero-wrapper mx-5 rounded-bottom shadow-xxl bg-composed-wrapper bg-second">
                                <div className="flex-grow-1 w-100 d-flex align-items-center">
                                    <div className="bg-composed-wrapper--bg rounded-bottom bg-deep-sky opacity-4" />
                                    <div className="bg-composed-wrapper--content px-3 py-5">
                                        <div className="d-block d-md-flex align-items-start p-5">
                                            <div className="dropzone rounded-circle shadow-sm-dark mr-md-3">
                                                <div className="avatar-icon-wrapper d-140 rounded-circle m-2">
                                                    <MUI.Avatar
                                                        alt={data && data.launch.links && data.launch.links.mission_patch_small}
                                                        src={data && data.launch.links && data.launch.links.mission_patch_small}
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
                                                </div>
                                                <div className="d-flex font-size-xl py-4 align-items-center">
                                                    <div className="mr-4">
                                                        <LocalGasStationIcon />
                                                        {data && COMM.formatNumber(data.launch.rocket.rocket.mass.kg)} <span className="font-size-sm text-white-50">kg</span>
                                                    </div>
                                                    <div className="mr-4">
                                                        <ScaleIcon />
                                                        {data && COMM.formatNumber(data.launch.rocket.rocket.second_stage.fuel_amount_tons)} <span className="font-size-sm text-white-50">tons</span>
                                                    </div>
                                                    <div className="mr-4">
                                                        {data?.launch.launch_success ? <RocketIcon /> : <HeartBrokenIcon />}

                                                        <span className="font-size-sm text-white-50">{data?.launch.launch_success ? 'Success' : 'Failed'}</span>
                                                    </div>
                                                </div>
                                                <div className="font-size-lg">{data && data.launch.details}</div>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <MUI.Grid container spacing={6}>
                                                {data &&
                                                    data.launch.links &&
                                                    data.launch.links.flickr_images &&
                                                    data.launch.links.flickr_images.map((item, i) => (
                                                        <MUI.Grid item lg={6} key={i}>
                                                            <MUI.Card>
                                                                <img alt="..." className="card-img-top" src={item} />
                                                            </MUI.Card>
                                                        </MUI.Grid>
                                                    ))}
                                            </MUI.Grid>
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
