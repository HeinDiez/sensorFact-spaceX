import React, { useState } from 'react';
// import * as MUI from '@mui/material';

import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from './launches.gql';
import { LaunchList } from './launches.interface';

import LaunchesList from './Launches.list';
import LaunchesGrid from './Launches.grid';
import LoadingList from '../Loading/Loading.List';

import Container from '@mui/material/Container';

function Launches() {
    const [view, setView] = useState('list');
    const [limit, setLimit] = useState<number>(10);
    const { error, loading, data } = useQuery<LaunchList>(GET_LAUNCHES, {
        variables: { limit }
    });
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
                                {view === 'grid' ? <LaunchesGrid launches={data.launches} /> : <LaunchesList launches={data.launches} setLimit={setLimit} variables={{ limit }} />}
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )}
            </Container>
        </div>
    );
}

export default Launches;
