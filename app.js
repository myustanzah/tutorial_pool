const express = require('express');
const app = express();
const port = 3000;
const routeTeacher = require('./route/teacher')
const routeStudent = require('./route/student')
const routeSubject = require('./route/subject')



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(routeTeacher)
app.use(routeStudent)
app.use(routeSubject)

app.listen(port, () => {
    console.log(`App have been running in port:`, port);
})