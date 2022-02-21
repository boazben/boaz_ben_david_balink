const UserCRUD = require('../crud/users.crud')

exports.getUser = async function getUser(id, one, getAll) {
    if (getAll) {
        return await UserCRUD.read({})
    }
    return await UserCRUD.read({key: 'id', value: id}, one)
}

exports.updateUser = async function updateUser(user, del) {
    if (del) return await UserCRUD.del(user.id)
    return await UserCRUD.update({key: 'id', value: user.id}, user)
}

exports.addUser = async function addUser(user) {
    return await UserCRUD.create(user)
}