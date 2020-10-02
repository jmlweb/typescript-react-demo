# re-starter

Just a simple starter for a Client - Server project with TS based on [Express](https://expressjs.com/) and [React](https://reactjs.org/)

## Requisites

This project uses [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)

## Workspaces

- *Client*: CRA based project with airbnb's eslint config applied
- *Server*: Express
- *Common*: Shared constants and types between client and server

## Installation and configuration

From the main directory of the project, execute `yarn install`.

Fill .env files inside "packages/client" and "packages/server".

## Scripts

From the main directory, execute `yarn start` or `yarn build`.

- *start*: Watches for changes on all the project, and starts the server and the client.

- *build*: Builds all the projects for production.
