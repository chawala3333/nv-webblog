const {User} = require('../models')

module.exports = {
  // get all users
  async index (req, res) {
    try {
      const users = await User.findAll()
      res.send(users)
    }
    catch (err) {
      res.status(500).send({
        error: 'The users information was incorrect'
      })
    }
  },

  // create user
  async create (req, res) {
    // res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    }
    catch (err) {
      res.status(500).send({
        error: 'Create user incorrect'
      })
    }
  },

  // Edit user, Sepend, Active
  async put (req, res) {
    // res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
    try {
      await User.update(req.body, {
      where: {
          id: req.params.userId
        }
      })
      res.send(req.body)
    } 
    catch (err) {
      req.status(500).send({
        error: 'Update user incorrect'
      })
    }
  },

  // Delete user
  async remove (req, res) {
    // res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
    try {
        const user = await User.findOne({
          where: {
            id: req.params.userId
          }
        })
        if(!user){
          return res.status(403).send({
            error: 'The user information was incorrect'
          })
        }
        await user.destroy()
        res.send(user)
      }
      catch (err) {
      req.status(500).send({
        error: 'The user information eas incorrect'
      })
    }
  },

  // Get user by id
  async show (req, res) {
    // res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
    try {
      const user = await User.findById(req.params.userId)
      res.send(user)
    } catch (err) {
      req.status(500).send({
        error: 'The user infomation was incorrect'
      })
    }
  }
}