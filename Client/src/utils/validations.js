const validator = require('validator')

function name(name) {
    if (typeof name=== "string") {
        if (name.length >= 2 && name.length <= 20) {
            if(/^[\sa-zA-Z\u0080-\uFFFF]+$/.test(name))
                return {success: true}
        }
    }
    return {success: false, errorDictionary: 'name'}
} exports.name = name

function phone(phone) {
    if (typeof(phone) === "string" && validator.isMobilePhone(phone, 'he-IL')) {
        return {success: true}
    }
    else return {success: false, errorDictionary: 'phone'}
} exports.phone = phone

function isAge(age) {
    age = Number(age)
    if (!isNaN(age) && age > 0 && age <= 120 && Number.isInteger(age)) return {success: true}
    else return {success: false, errorDictionary: 'age'}
} exports.isAge = isAge

function isFullUser(user) {

    // Validate the user fields:

    // Firs Name: 
    if (!name(user.firstName).success) return {success: false, errorDictionary: 'firstName'}

    // Last Name: 
    if (!name(user.lastName).success) return {success: false, errorDictionary: 'lastName'}

    // Phone:
    if (!phone(user.phone).success) return {success: false, errorDictionary: 'phone'}

    // Age:
    if (!isAge(user.age).success) return {success: false, errorDictionary: 'age'}

    return {success: true}
} exports.isFullUser = isFullUser


function isUser(user) {

    // Validate the user fields:

    // Firs Name: 
    if (user.firstName && !name(user.firstName).success) return {success: false, errorDictionary: 'firstName'}

    // Last Name: 
    if (user.lastName && !name(user.lastName).success) return {success: false, errorDictionary: 'lastName'}

    // Phone:
    if (user.phone && !phone(user.phone).success) return {success: false, errorDictionary: 'phone'}

    // Age:
    if (user.age && !isAge(user.age).success) return {success: false, errorDictionary: 'age'}

    return {success: true}
} exports.isUser = isUser


