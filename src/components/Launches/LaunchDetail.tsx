import React from 'react';
import * as MUI from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_LAUNCH } from './launches.gql';
import { Launch } from './launches.interface';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';

export default function LaunchDetail() {
    const { id } = useParams();
    const { error, loading, data } = useQuery<{ launch: Launch }>(GET_LAUNCH, {
        variables: { id }
    });
    return (
        <div>
            <Container>
                <MUI.Avatar alt={data && data.launch.links.mission_patch_small} src={data && data.launch.links.mission_patch_small} sx={{ width: 65, height: 65 }} />
                <h1>{data && data.launch.mission_name}</h1>
                <p>{data && data.launch.details}</p>
            </Container>
        </div>
    );
}
