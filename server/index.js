const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;
const apiRoutes = require('./api');
const buildPath = './client/build';

app.use(express.static(buildPath));
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
