# The Codes Client

This is the frontend client for the "The Codes" web app.

Live demo version of client: https://thecodes-client.vercel.app
Registering and Login work on demo. Demo account: Username:`demo` Password:`P4ssword!`.

Admin panel is accessable via: https://thecodes-client.vercel.app/admin/panel
Admin demo account is: Username:`admin` Password:`P4ssword!`

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

## Page Views

- Home Page:
  ![Image of Home Page](/TheCodesScreenshots/HomePage.png)
- Login Page:
  ![Image of Login Page](/TheCodesScreenshots/Login.png)
- Register Page:
  ![Image of Register Page]()
- View Codes Page:
  ![Image of View Codes Page]()
- Users Codes Page:
  ![Image of Users Codes Page]()
- A Code Page:
  ![Image of A Code Page]()
- User Answers Page:
  ![Image of User Answers Page]()
- View Answer Page:
  ![Image of View Answer Page]()
- User Home Page:
  ![Image of User Home Page]()
- Create Code Page:
  ![Image of Create Code Page]()

## thecodes-client