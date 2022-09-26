import { gql } from '@apollo/client';

// sort: "mission_name", order: "desc", offset: 2, find: { mission_name:  }
export const GET_LAUNCHES = gql`
    query GetLaunchList($limit: Int!, $sort: String, $order: String, $offset: Int!, $find: String) {
        launches(limit: $limit, sort: $sort, order: $order, offset: $offset, find: { mission_name: $find }) {
            rocket {
                rocket_name
                rocket {
                    mass {
                        kg
                    }
                    second_stage {
                        fuel_amount_tons
                    }
                }
            }
            id
            mission_name
            links {
                flickr_images
                mission_patch_small
            }
            launch_date_utc
        }
    }
`;

export const GET_LAUNCH = gql`
    query GetLaunch($id: ID!) {
        launch(id: $id) {
            rocket {
                rocket_name
                rocket {
                    country
                    name
                    mass {
                        kg
                    }
                    second_stage {
                        fuel_amount_tons
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
`;
