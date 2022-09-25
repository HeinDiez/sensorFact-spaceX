import { gql } from '@apollo/client';

export const GET_LAUNCHES = gql`
    query GetLaunchList($limit: Int!){
        launches(limit: $limit) {
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
            links {
                flickr_images
                mission_patch
                mission_patch_small
                presskit
            }
            launch_site {
                site_name_long
            }
            launch_date_utc
        }
    }
`