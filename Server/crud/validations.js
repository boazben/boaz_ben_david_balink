const validator = require('validator')

exports.userName = function userName(userName) {
    if (typeof(userName?.first) === "string" & typeof(userName?.last) === "string") {
        console.log('Step 1');
        if (userName.first.length > 2 && userName.last.length < 20 && userName.last.length > 2 && userName.last.length < 20) {
            console.log('Step 2');
            if(/^[a-zA-Z\u0080-\uFFFF]+$/.test(userName.first) && /^[a-zA-Z\u0080-\uFFFF]+$/.test(userName.last))
            console.log('Step 3');
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
