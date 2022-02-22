const validator = require('validator')

exports.name = function name(name) {
    if (typeof name=== "string") {
        if (name.length >= 2 && name.length <= 20) {
            if(/^[\sa-zA-Z\u0080-\uFFFF]+$/.test(name))
                return true
        }
    }
    return false
}

exports.phone = function phone(phone) {
    if (typeof(phone) === "string" && validator.isMobilePhone(phone, 'he-IL')) {
        return true
    }
    else return false
}

exports.age = function isAge(age) {
    if (typeof age === "number" && age > 0 && age < 120) return true
    else return false
}
