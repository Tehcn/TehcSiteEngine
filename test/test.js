const express = require('express');
const tehcSiteEngine = require('../src/index');

let app = express();

let engine = tehcSiteEngine('/views')

app.use('*', engine);

let port = process.env.PORT || process.PORT || 3000;
app.listen(3000, () => console.log(`test app started at ${new Date()}: http://127.0.0.1:${port}`));