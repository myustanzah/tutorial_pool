const express = require('express')
const Controller = require('../controller/controller')
const routeSubject = express.Router()

routeSubject.get('/subject', Controller.listSubject)

module.exports = routeSubject