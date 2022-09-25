interface Rocket {
    rocket_name: number;
    rocket: {
        name: string;
        country: string;
        mass: {
            kg: number;
        };
        second_stage: {
            fuel_amount_tons: number;
        };
    };
}

export interface Launch {
    id: number;
    details: string;
    launch_success: string;
    mission_name: string;
    rocket: Rocket;
    links: {
        flickr_images: string;
        mission_patch: string;
        mission_patch_small: string;
        presskit: string;
    };
    launch_site: {
        site_name_long: string;
    };
    launch_date_utc: string;
}

export interface LaunchList {
    launches: Launch[];
}

export interface LaunchListProps {
    launches: Launch[];
    setLimit: any;
    variables: {
        limit: number;
    };
}
