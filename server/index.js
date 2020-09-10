const express = require('express');
const app = express();
const apiRoutes = require('./api');
const PORT = process.env.PORT || 5000;
const buildPath = './client/build';
app.use(express.json());

// Left mostly for test purposes
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', express.static(buildPath));
app.use('/api', apiRoutes);


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
