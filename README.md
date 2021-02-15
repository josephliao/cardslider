# cardslider
Take Home Assignment (HTML/CSS/JAVASCRIPT)
Run the Dummy Card API to parse JSON file locally, then open cardslider/src/index.html in the browser.

# Dummy Card API
Simple server exposing *dummy* data for display on cards.

## Usage
Simply run
    yarn
    yarn start

and access ``http://127.0.0.1:3000/cards`` to get an array of data.

If you want to retrieve just a subset, specify the lower and upper limit as query parameters, for example:

    http://127.0.0.1:3000/cards?_start=8&_end=12


## For unit test 
1. `yarn install` (or `npm install`) to install dependencies
2. `yarn start` (or `npm start`) to preview the app locally
3. `yarn test` (or `npm test`) to run the tests