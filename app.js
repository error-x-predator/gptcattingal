const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',indexRouter);

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on PORT :${process.env.PORT}`);
})