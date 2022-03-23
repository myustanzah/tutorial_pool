const pool = require('../config/config');
const { Teachers, Students, Subjects } = require('./instence');

class Model {
    static listTeacher() {
        return new Promise((resolve, reject) => {
            const checkDataTeacher = `SELECT * FROM "Teachers";`;
            pool.query(checkDataTeacher)
                .then((res) => {
                    let dataInstence = res.rows.map((element) => {
                        return new Teachers(element)
                    })
                    resolve(dataInstence)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }

    static listStudent() {
        return new Promise((resolve, reject) => {
            const checkDataStudent = `SELECT * FROM "Students";`;
            pool.query(checkDataStudent)
                .then((res) => {
                    let dataInstence = res.rows.map((element) => {
                        return new Students(element)
                    })
                    resolve(dataInstence)
                })
                .catch((err) => {
                    reject(err)
                })

        })
    }
    static listSubject() {
        return new Promise((resolve, reject) => {
            const checkDataSubject = `SELECT * FROM "Subjects";`;
            pool.query(checkDataSubject)
                .then((res) => {
                    let dataInstence = res.rows.map((element) => {
                        return new Subjects(element)
                    })
                    resolve(dataInstence)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    static addStudent(input) {
        return new Promise((resolve, reject) => {
            let error = []

            if (!input.first_name) {
                error.push(`first_name required`)
            }
            if (!input.last_name) {
                error.push(`last_name required`)
            }
            if (!input.email) {
                error.push(`email required`)
            }
            if (!input.gender) {
                error.push(`gender required`)
            }
            if (!input.birthdate) {
                error.push(`birthdate required`)
            }

            if (error.length > 0) {
                reject(error)
            } else {
                let checkData = `SELECT * FROM "Students";`
                pool.query(checkData)
                    .then((res) => {
                        let data = res.rows
                        input["id"] = data[data.length - 1].id + 1
                        let InsertData = `
                    INSERT INTO "Students"
                    ("id", "first_name", "last_name", "email", "gender", "birthdate")
                    VALUES
                    ('${input.id}', '${input.first_name}', '${input.last_name}', '${input.email}', '${input.gender}', '${input.birthdate}');`
                        pool.query(InsertData)
                            .then((res) => {
                                resolve(res)
                            })
                            .catch((err) => {
                                reject(err)
                            })
                    })
            }
        })
    }
    static findStudent(id) {
        return new Promise((resolve, reject) => {
            const dataCheck = `SELECT * FROM "Students" WHERE "id" = ${id}`
            pool.query(dataCheck)
                .then((res) => {
                    let data = new Students(res.rows[0])
                    resolve(data)
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
    static editStudent(input) {
        return new Promise((resolve, reject) => {
            let error = []

            if (!input.first_name) {
                error.push(`first_name required`)
            }
            if (!input.last_name) {
                error.push(`last_name required`)
            }
            if (!input.email) {
                error.push(`email required`)
            }
            if (!input.gender) {
                error.push(`gender required`)
            }
            if (!input.birthdate) {
                error.push(`birthdate required`)
            }
            if (error.length > 0) {
                reject(error)
            } else {
                const updateData = `
                UPDATE "Students"
                SET "first_name" = '${input.first_name}', "last_name" = '${input.last_name}', "email" = '${input.email}', "gender" = '${input.gender}', "birthdate" = '${input.birthdate}'
                WHERE "id" = '${input.id}';`

                pool.query(updateData)
                    .then((res) => {
                        resolve(res)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            }
        })
    }
    static deleteStudent(id, callback) {
        return new Promise((resolve, reject) => {
            const queryDeleteData = `DELETE FROM "Students" WHERE "id" = '${id}';`
            pool.query(queryDeleteData)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })

        })
    }
}

module.exports = Model