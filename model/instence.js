class Teachers {
    constructor(obj) {
        this.id = obj.id
        this.first_name = obj.first_name
        this.last_name = obj.last_name
        this.email = obj.email
        this.gender = obj.gender
    }
}

class Students {
    constructor(obj) {
        this.id = obj.id
        this.first_name = obj.first_name
        this.last_name = obj.last_name
        this.email = obj.email
        this.gender = obj.gender
        this.birthdate = obj.birthdate
    }
}

class Subjects {
    constructor(obj) {
        this.id = obj.id
        this.subject_name = obj.subject_name
    }
}

module.exports = { Teachers, Students, Subjects }