const UserController = require('./controllers/UserController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {
  // RESFUL Api for users managament
  app.post('/login',
    UserAuthenController.login
  )

  // Create user
  app.post('/user', UserController.create)

  // Edit UserController, suspend active
  app.put('/user/:userId', UserController.put)

  // Delete user
  app.delete('/user/:userId', UserController.remove)

  // Get user by id
  app.get('/user/:userId', UserController.show)

  // Get all users
  app.get('/users', UserController.index)
}