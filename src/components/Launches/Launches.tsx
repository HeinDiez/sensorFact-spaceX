import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_LAUNCHES } from './launches.gql';
import { LaunchList, Table } from './launches.interface';
import { useSnackbar } from 'notistack';

import LaunchesList from './Launches.list';
import Container from '@mui/material/Container';

function Launches() {
    const { enqueueSnackbar } = useSnackbar();
    const [variables, setVariables] = useState<Table>({
        limit: 10,
        sort: 'mission_name',
        order: 'asc',
        offset: 0,
        find: ''
    });
    const [getLaunches, { error, loading, data }] = useLazyQuery<LaunchList>(GET_LAUNCHES, { variables, fetchPolicy: 'cache-and-network' });
    useEffect(() => {
        getLaunches();
    }, []);
    if (error) {
        enqueueSnackbar(`Error 7443: ${error}`, { variant: 'error' });
    }
    return (
        <div className="py-3">
            <Container>
                <LaunchesList launches={data ? data.launches : []} setVariables={setVariables} variables={variables} getLaunches={getLaunches} lazyloading={loading} />
            </Container>
        </div>
    );
}

export default Launches;
