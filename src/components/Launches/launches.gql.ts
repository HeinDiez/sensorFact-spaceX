import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
    query {
        launches(limit: 10) {
            rocket {
                rocket_name
                rocket {
                    country
                    mass {
                        kg
                    }
                }
            }
            id
            details
            launch_success
            mission_name
        }
    }
`