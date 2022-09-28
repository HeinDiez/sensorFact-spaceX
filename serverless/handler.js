'use strict';

module.exports.calculate = (event, context, callback) => {
    // Calculation:
    // *CE (Consumed Energy)
    // *RM (Rocket Mass)
    // *FM (Fuel Mass)
    // CE = ( RM + FM ) * 15;
    // EV = 1.35*10^7 * CE;
    try {
        const convTONtoKG = (ton) => {
            // assuming 1 ton is equal to 1000
            return ton * 1000;
        };
        const calculateEV = (data) => {
            const variables = {
                energyCost: 13500000,
                fuelCost: 15
            };
            const FM = convTONtoKG(data.rocket.rocket.second_stage.fuel_amount_tons);
            const RM = data.rocket.rocket.mass.kg;

            const CE = (RM + FM) * variables.fuelCost;
            const EV = variables.energyCost * CE;

            return { ...data, energyValue: EV };
        };
        const data = event.data.map((rocket) => calculateEV(rocket));
        callback(null, data);
    } catch (error) {
        callback(true, error);
    }
};
