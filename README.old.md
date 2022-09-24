# Sensorfact assignment fullstack developer: SpaceX case
## Intro
### Goal
The goal of this assignment is to assess your skills as a fullstack developer.

In this assignment, we included a few of the technologies that we use in our
existing solution:

- **React:**
We have multiple interfaces for internal users (e.g. an application
to register machine specific information) and external users (e.g. an
application to view the energy consumption patterns for each machine). These
applications are created using ReactJS.
- **GraphQL:**
Within Sensorfact we expose most of our data regarding measurements, machine
specific configuration and industry knowledge via a GraphQL API.
- **Serverless:**
Most of our backend consists of NodeJS services in a
Kubernetes cluster, but we are moving the logic of simple services to AWS Lambda
functions and deploy these using Serverless.
- **TypeScript:**
The majority of our code is written in plain JavaScript. All
new projects use TypeScript, because we like the benefits that the type system
offers us during development, reviews and testing.

### Process

> TLDR;
> 1. Spend approximately half a day on the assignment
> 2. Make a conscious decision on what you want to focus on: it's fine if you
cannot complete the entire assignment.
> 3. Send us your solution before the technical interview
> 4. Contact us if you have any questions

Please keep in mind the following:

- We intend for you to spend only a few hours (approximately half a day) on this
assignment, which is too little to do everything you might want. Decide what you
want to focus on and reserve some time to wrap it up and communicate how far you
got.
- We understand that you do not have experience with all aspects of this
assignment. Make sure that you can show something during the technical
interview and make an effort to learn something new. It's usually really
interesting to discuss how you learn and act if you're stuck, as you will also
encounter new challenges regularly when working for Sensorfact.
- Take this assignment as an opportunity to show us your style: what you like to
work on, what you find important.
- If you have any further questions, do not hesitate to contact us.

During the technical interview, we will discuss your solution. Some of the
topics could be:

- Why did you decide to use specific libraries?
- Can you walk us through your choices and decisions?
- What aspects of the work did you like or dislike?
- What aspects of the assignment were easy or difficult for you?
- Was there anything you had not worked with before?
- To what extent is the code clean and easy to maintain?
- What would you improve next?

Make sure to send us the assignment before the technical interview (either share
access to a Git repo or send us a zip file). This allows us to prepare relevant
questions for you.

## Assignment
As a fullstack developer it is important to be able to consume different data
sources, implement business logic and allow users to interact with our systems.

In this assignment you will create a small [React](https://reactjs.org/) project
that consumes the [SpaceX GraphQL API](https://api.spacex.land/graphql/) to
display information about their launches. The end user needs to be able to
select multiple launches from the list that you display and request the
estimated total energy that these launches consumed. The result needs to be
displayed as well.

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
