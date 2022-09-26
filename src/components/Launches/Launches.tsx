import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_LAUNCHES } from './launches.gql';
import { LaunchList, Table } from './launches.interface';

import LaunchesList from './Launches.list';
import Container from '@mui/material/Container';

function Launches() {
    const [variables, setVariables] = useState<Table>({
        limit: 10,
        sort: 'mission_name',
        order: 'asc',
        offset: 0,
        find: ''
    });
    const [getLaunches, { called, error, loading, data }] = useLazyQuery<LaunchList>(GET_LAUNCHES, { variables, fetchPolicy: 'cache-and-network' });
    console.log({ called, error, loading, data }, 'check lazyloading');
    useEffect(() => {
        getLaunches();
    }, []);
    if (error) {
        return <div>Something went wrong...</div>;
    }
    return (
        <div className="py-3">
            <Container>
                <LaunchesList launches={data ? data.launches : []} setVariables={setVariables} variables={variables} getLaunches={getLaunches} loading={loading} />
            </Container>
        </div>
    );
}

export default Launches;
