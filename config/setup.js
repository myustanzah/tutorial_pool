const pool = require('./config')

let tableTeacher = `
CREATE TABLE IF NOT EXISTS "Teachers"(
"id" serial PRIMARY KEY,
"first_name" VARCHAR,
"last_name" VARCHAR,
"email" VARCHAR,
"gender" VARCHAR
);`

let tableStudent = `
CREATE TABLE IF NOT EXISTS "Students"(
"id" serial PRIMARY KEY,
"first_name" VARCHAR,
"last_name" VARCHAR,
"email" VARCHAR,
"gender" VARCHAR,
"birthdate" VARCHAR
 );`

let tableSubject = `
 CREATE TABLE IF NOT EXISTS "Subjects"(
"id" serial PRIMARY KEY,
"subject_name" VARCHAR
 );`

pool.query(tableTeacher, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        pool.query(tableStudent, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                pool.query(tableSubject, (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(`Table berhasil dibuat`);
                    }
                })
            }
        })
    }
})
