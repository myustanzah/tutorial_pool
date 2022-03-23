const express = require('express')
const Controller = require('../controller/controller')
const routeTeacher = express.Router()

routeTeacher.get('/teacher', Controller.listTeacher)

module.exports = routeTeacher