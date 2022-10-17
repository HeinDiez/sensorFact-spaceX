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
        const calculateEnergyValue = (data) => {
            const variables = {
                energyCost: 13500000, //1.35*10^7 per consumedEnergy
                fuelCost: 15
            };
            const fuelMass = convTONtoKG(data.rocket.rocket.second_stage.fuel_amount_tons);
            const rocketMass = data.rocket.rocket.mass.kg;

            const consumedEnergy = (rocketMass + fuelMass) * variables.fuelCost;
            const energyValue = variables.energyCost * consumedEnergy;

            return { ...data, energyValue };
        };
        const data = event.data.map((rocket) => calculateEnergyValue(rocket));
        callback(null, data);
    } catch (error) {
        callback(true, error);
    }
};
