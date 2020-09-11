# The Codes Client

This is the frontend client for the "The Codes" web app.

Live demo version of client: https://thecodes-client.vercel.app

## Set Up

- Install dependencies: `npm install`
- In the config.js file:
  - Set API_ENDPOINT to your servername plus /api ex: `https://my-herokua-app.herokuapp.com/api`
- Set the REACT_APP_API_KEY in the host enviroment to match the server token key called by `process.env.REACT_APP_API_KEY`
- Build the app with: `npm run build`

## Deploying

- Deploy to your hosting provider.
  - Default deploy is to Vercel with: `npm run deploy`.
  - Change deploy script in package.json if you are using a different service.

## thecodes-client