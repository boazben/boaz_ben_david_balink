const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const ReturnVal = require('../errors/ReturnVal');
const Validations = require('./validations');

// The four basic actions: create, read, update, delete (CRUD):

function create(user) {

    console.log(user.name);

    // Validate the user fields:

    // Name: 
    if (!Validations.userName(user.name)) return ReturnVal(false, null, 11, "Invalid username")

    // Phone:
    if (!Validations.phone(user.phone)) return ReturnVal(false, null, 11, "Invalid phone")

    // Age:
    if (!Validations.age(user.age)) return ReturnVal(false, null, 11, "Invalid age")

    // Checking for no additional field:
    if (Object.keys(user).length !== 3) return ReturnVal(false, null, 11, "The user should only contain name, age and phone number")
    
    // Create id field:
    user.id = uuidv4();
    
    // Get array of all user:
    const users = JSON.parse(fs.readFileSync('./db/users.json'))
    
    // Adds the new user to the array:
    users.push(user)

    // Inserts the updated list into the file
    fs.writeFileSync('./db/users.json', JSON.stringify(users, null, 4))

    // Return success and the new user:
    return ReturnVal(true, user)

} exports.create = create;


function read(filter, one=false) {

    // Get all users:
    const users = JSON.parse(fs.readFileSync('./db/users.json'))

    // If want just one user, find the specified user and return it:
    if (one) {
        const user = users.find(user => filter.value == user[`${filter.key}`])
        if (!user) return ReturnVal(false, null, 12, "The user does not exist")
        return ReturnVal(true,  user)
    }
    
    // If want a lot of users:
    else return ReturnVal(true,  users.filter(user => filter.value == user[`${filter.key}`]))

}exports.read = read;


function update(filter, newData) {

     // Validate the user fields to update:

    // Name: 
    if (newData.name && !Validations.userName(newData.name)) return ReturnVal(false, null, 11, "Invalid user name")

    // Phone:
    if (newData.phone && !Validations.phone(newData.phone)) return ReturnVal(false, null, 11, "Invalid phone")

    // Age:
    if (newData.age && !Validations.age(newData.age)) return ReturnVal(false, null, 11, "Invalid age")

    // Leave only the valid fields:
    let updateUser = {};
    for (let [key, value] of Object.entries(newData)) {
        if (key == "name" || key == "phone" || key == "age") {
           updateUser = {...updateUser, [key]: value}
        } 
      }
    
    // Get array of all users:
    const users = JSON.parse(fs.readFileSync('./db/users.json'))

    // Update the user:
    const user = users.find((user, index) => {
        if(filter.value == user[`${filter.key}`]) {
            users[index] = {...users[index] ,...updateUser}
            return true
        }
    })

    if (!user) return ReturnVal(false, null, 12, "The user does not exist")
    
    // Inserts the updated list into the file:
    fs.writeFileSync('./db/users.json', JSON.stringify(users, null, 4))
    
    // Return success and the updated user:
    return ReturnVal(true, users.find(user => filter.value == user[`${filter.key}`]))

}exports.update = update;


function del(id) {

    // Get array of all users:
    const users = JSON.parse(fs.readFileSync('./db/users.json'))

    // Remove the user from the array:
    const user = users.find((user, index) => {
        if(user.id == id) {
            users.splice(index, 1);
            return true
        }
    })

    // If the user is not exist:
    if(!user) return ReturnVal(false, null, 12, "The user does not exist")

    // Inserts the updated list into the file:
    fs.writeFileSync('./db/users.json', JSON.stringify(users, null, 4))

    // Return success and the id of the user that deleted:
    return ReturnVal(true, `The user: ${user.name.first} ${user.name.last} has been deleted`);
}exports.del = del;
