# Fh Take Home Test

This is the client for the Fh take home test. It shows the top 50 Apple music albums grouped by genre. To run the app locally on your machine in dev mode, please first `npm install` before `npm start`. Due to CORS issues accessing the Apple Music api, a local node server must be running. This server can be found here https://github.com/logonv/fhserver


## Features implemented:

Gets top 50 albums from given api link and sorts by genre and displays them
Able to search by album name
Able to learn more about a particular album

Code is written but commented out to also search by artist name.
Some basic tests carried out with Cypress.

## Future Work/ Known Issues
* More CSS and styling (e.g. adjust size of cards, colours) required
* Issue - "Music" genre returned by API showing all albums
* Issue - Some images returned by API are too low quality
* Need to improve general efficiency and remove unnecessary re-renders.
* Need to remove the need for the additional server to act as CORS proxy.
* Need to do more detailed tests.
* Need to add a loading screen when fetching data as can be slow to fetch. (Maybe can store old data as cookies).


*******
### Details from CRA

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

