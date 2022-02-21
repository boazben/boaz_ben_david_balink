const UserControllers = require('./controllers/users.controller')

module.exports = function Router(app){

    // Get user: 
    app.get('/user/:id/:one?', async (req, res) => {
        try {
            const {id, one} = req.params
            const getAll = req.query.getAll
            const user = await UserControllers.getUser(id, one, getAll)
            res.send(user)
        } catch (error) {
            res.status(400).send({error: error.message || error});
        }
    }) 


    // Edit user: 
    app.put('/user/edit?', async (req, res) => {
        try {
            const user = req.body
            const del = req.query.del
            const updateUser = await UserControllers.updateUser(user, del)
            res.send(updateUser)
        } catch (error) {
            res.status(400).send({error: error.message || error});
        }
    }) 


    // Add user: 
    app.post('/user/add', async (req, res) => {
        try {
            const user = req.body
            const newUser = await UserControllers.addUser(user)
            res.send(newUser)
        } catch (error) {
            console.log(error);
            res.status(400).send({error: error.message || error});
        }
    }) 
}