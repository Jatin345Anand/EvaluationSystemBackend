const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const userRoute = require('./routes/Studentroute');
const CORS = require('./utils/middlewares/cors');
const ejs = require('ejs');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());
app.use(CORS);
app.use("/", userRoute);

app.listen(process.env.PORT || 1234, () => {
    console.log('Server start...');
});