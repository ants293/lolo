## Development build

In repo root run local server in port 5000:

    npm install
    npm watch
    
For the front-end development build:

    cd /client

Create .env.local and add http://localhost:5000 to REACT_APP_NODE_SERVICE_URL key then

    npm install
    npm start
    
App is available in http://localhost:3000, request by default come from http://localhost:5000

## Production build

    npm install
    npm start
    npm run build

## Utilities

    cd /client
    npm run lint
