const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();
const buildPath = './client/build';

app.use(express.static(buildPath));

app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
