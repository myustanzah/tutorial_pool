const express = require('express')
const Controller = require('../controller/controller')
const routeStudent = express.Router()

routeStudent.get('/student', Controller.listStudent)
routeStudent.get('/student/form-add', Controller.addStudent)
routeStudent.post('/student/add', Controller.postStudent)
routeStudent.get('/student/:id', Controller.findStudent)
routeStudent.post('/student/:id/edit', Controller.editStudent)
routeStudent.get('/student/delete/:id', Controller.deleteStudent)

module.exports = routeStudent