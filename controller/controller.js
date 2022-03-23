
const Model = require("../model/model")

class Controller {
    static listTeacher(req, res) {
        Model.listTeacher()
            .then((data) => {
                res.render('teacher.ejs', { data })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static listStudent(req, res) {
        Model.listStudent()
            .then((data) => {
                res.render('student.ejs', { data })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static listSubject(req, res) {
        Model.listSubject()
            .then((data) => {
                res.render('subject.ejs', { data })
            })
            .catch((err) => {
                res.send(err)
            })
    }

    static addStudent(req, res) {
        res.render('form_add_student.ejs')
    }

    static postStudent(req, res) {
        let input = req.body
        Model.addStudent(input)
            .then((data) => {
                res.redirect('/student')
            })
            .catch(() => {
                res.send(err)
            })
    }
    static findStudent(req, res) {
        let findId = +req.params.id
        Model.findStudent(findId)
            .then((data) => {
                res.render('edit_student.ejs', { data })
            })
            .catch((err) => {
                res.send(err)
            })
    }
    static editStudent(req, res) {
        let input = req.body

        Model.editStudent(input)
            .then((data) => {
                res.redirect('/student')
            })
            .catch((err) => {
                res.send(err)
            })

    }
    static deleteStudent(req, res) {
        let id = req.params.id
        Model.deleteStudent(id)
            .then((data) => {
                res.redirect('/student')
            })
            .catch((err) => {
                res.send(err)
            })
    }
}
module.exports = Controller