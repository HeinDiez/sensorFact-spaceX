The question from business to you is:
> We think it would be interesting to show how much energy is used by the
SpaceX launches, so that people can rethink if it is worth it to take a trip
into space. Our ideas are still quite vague, but do you think you can create a
first draft of a web page that shows this information?

In real life such a question would of course lead to an interesting refinement
session. In this assignment, you have limited information and resources.
Therefore, it is obvious that the solution will be rough and would need some
polishing at a later stage.

### Front end
You can create a simple application using [React](https://reactjs.org/) and
[TypeScript](https://www.typescriptlang.org/).

- You can use any UI library (some examples are [Material UI](https://mui.com/),
[Ant Design](https://ant.design/))
- You can use any client of your choice to query the SpaceX GraphQL API (some
examples are [Apollo client](https://www.apollographql.com/docs/react/),
[GraphQL request](https://github.com/prisma-labs/graphql-request),
[Relay](https://relay.dev/)).

The front end application should
- Query [SpaceX GraphQL API](https://api.spacex.land/graphql/) for launches.
You decide which launches to display and whether or not to include filters.
- Display launch information
- Allow the user to select multiple launches
- Allow the user to request the estimated total energy usage for the selected
launches
- Display the estimated energy consumption for the selected launches

### Back end

#### SpaceX GraphQL API
You can query the open [SpaceX GraphQL API](https://api.spacex.land/graphql/)
directly; there is no need to set up your own GraphQL project to query the
launch data.

#### Energy estimation
You set up a [serverless](https://www.serverless.com/) function using
[TypeScript](https://www.typescriptlang.org/). This end point is called from
the front end application directly.

The end point should

- Return the estimated total energy usage for a selection of launches

The estimated energy can be calculated using some simple assumptions:
- The consumed energy depends only on the mass of the rocket that was used for
the launch + the mass of the fuel
- It costs about 15 kg of fuel bring 1 kg of mass to the Lower Earth Orbit
- The fuel has an energetic value of 1.35*10^7 Joules / kg
