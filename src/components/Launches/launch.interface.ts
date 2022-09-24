interface Rocket {
    rocket_name: number;
    rocket: {
        country: string;
        mass: {
            kg: number;
        }
    }
}

export interface Launch {
    id: number;
    details: string;
    launch_success: number;
    mission_name: number;
    rocket: Rocket;
}

export interface LaunchList {
    launches: Launch[];
}