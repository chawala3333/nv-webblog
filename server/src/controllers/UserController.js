module.exports = {
  // get all users
  index (req, res) {
    res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด')
  },

  // create user
  create (req, res) {
    res.send('ทำการสร้างผู้ใช้งาน: ' + JSON.stringify(req.body))
  },

  // Edit user, Sepend, Active
  put (req, res) {
    res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
  },

  // Delete user
  remove (req, res) {
    res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body))
  },

  // Get user by id
  show (req, res) {
    res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId)
  }
}