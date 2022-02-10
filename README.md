## Feedback UI Version 2.0

Feedback UI will render the reviews and show the total reviews and average rating on the top, and also user can delete the reviews.
This App is created using html, css, and React. We are using React Context to make certain data set “global” for a tree of React components.

## UI Screenshot

![UI-Screenshot](/src/images/Feedback-UI-Screenshot.png)

## Topics Covered

- React Framework
- React Components
- React Router (Route amd Link Elements)
- Props and Default Props
- React Hooks: useState, useEffect
- React Context API
- JS Async & Await
- JS Modules
- JS Higher Order Function: Reduce and Map
- JSON Server for data storage functionality

## Run this app on your device:

1. Add the proxy to Heroku Server by adding the 2nd line in 'package.json' after this line :

   ```
   "private": true,
   "proxy": "https://cat-fact.herokuapp.com/",
   ```

   Which will help you avoid CORS error.

2. Install Json Server: **_npm install json-server_** and add following script into the package.json:

   ## "server": "json-server --watch db.json"

3. Now run the json-server first on the cmd using : **_npm run server_** , which will operate on port localhost:3000

4. And on different cmd run React app using : **_npm start_**.

5. If you have any Node version conflict errors like : "digital envelope routines::initialization error"
   run the following command in current app terminal : **_export NODE_OPTIONS=--openssl-legacy-provider_**
