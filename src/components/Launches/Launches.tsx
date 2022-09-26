import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from './launches.gql';
import { LaunchList, Table } from './launches.interface';

import LaunchesList from './Launches.list';
import LoadingList from '../Loading/Loading.List';
import Container from '@mui/material/Container';

function Launches() {
    const [variables, setVariables] = useState<Table>({
        limit: 10,
        sort: 'mission_name',
        order: 'desc',
        offset: 0,
        find: ''
    });
    const { error, loading, data } = useQuery<LaunchList>(GET_LAUNCHES, { variables });
    if (error) {
        return <div>Something went wrong...</div>;
    }
    return (
        <div className="py-3">
            <Container>
                {loading ? (
                    <LoadingList />
                ) : (
                    <React.Fragment>
                        {data && (
                            <React.Fragment>
                                <LaunchesList launches={data.launches} setVariables={setVariables} variables={variables} />
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )}
            </Container>
        </div>
    );
}

export default Launches;
