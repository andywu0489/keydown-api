# keydown-api

## Description:
API for keydown-client with user and game resources.

## Link to keydown-client repo:
https://github.com/andywu0489/keydown-client

## Link to deployed client:
https://andywu0489.github.io/keydown-client/

## Link to deployed api:
https://infinite-peak-84898.herokuapp.com/

## Technologies used:
- Express
- MongoDB
- Mongoose

## Unsolved Problems:
- Need to format the created on timestamp so that is easily read

## Planning Process & Workflow:
- Created user stories and wireframes
- Set up backend and test with curlscripts
- Created board and set up game logic
- Set up authorization and tested
- Set up create, delete, update, read features
- Added styling

## ERD:

User -|--< Games


## Routes:

| Verb   | URI Pattern  | Result |
|:-------|:-------------|:------------------|
| GET    | `/games`     | read list of games|
| GET    | `/games/:id` | read single game  |
| POST   | `/games`     | create game       |
| PATCH  | `/games/:id` | update game       |
| DELETE | `/games/:id` | destroy game      |

## Installation Guide:
- Fork and clone this repository
- Create a new branch
- Checkout to new branch
- Install dependencies
- Follow this guide to deploy to heroku: https://git.generalassemb.ly/ga-wdi-boston/express-api-deployment-guide
- Update the production url in config.js in keydown-client with one generated in the previous step
