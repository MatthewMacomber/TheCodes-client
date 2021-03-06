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

## Technology

- Node.js
- classnames
- date-fns
- jwt-decode
- react
- react-dom
- react-router-dom
- react-scripts
- text-to-image

## Page Views

- Home Page:
  ![Image of Home Page](/TheCodesScreenshots/HomePage.png)
- Login Page:
  ![Image of Login Page](/TheCodesScreenshots/Login.png)
- Register Page:
  ![Image of Register Page](/TheCodesScreenshots/Register.png)
- View Codes Page:
  ![Image of View Codes Page](/TheCodesScreenshots/ViewCodes.png)
- Users Codes Page:
  ![Image of Users Codes Page](/TheCodesScreenshots/UserCodes.png)
- A Code Page:
  ![Image of A Code Page](/TheCodesScreenshots/ViewCode.png)
- User Answers Page:
  ![Image of User Answers Page](/TheCodesScreenshots/UserAnswers.png)
- View Answer Page:
  ![Image of View Answer Page](/TheCodesScreenshots/ViewAnswer.png)
- User Home Page:
  ![Image of User Home Page](/TheCodesScreenshots/UserHome.png)
- Create Code Page:
  ![Image of Create Code Page](/TheCodesScreenshots/CreateCode.png)

## thecodes-client