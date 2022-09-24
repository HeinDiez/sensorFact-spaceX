interface Mass {
    kg: number;
}
interface RocketDetail {
    country: string;
    mass: Mass
}

interface Rocket {
    rocket_name: number;
    rocket: RocketDetail
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