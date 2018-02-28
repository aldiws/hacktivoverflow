const express = require('express')
const router = express.Router()
const answers = require("../controller/answers")
const jwt = require('jsonwebtoken')

const isLogin = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token,"shhhhh")
    console.log('==============================',decoded);
    req.headers.oten = decoded
    console.log("==========================================================================>", req.headers.oten);
    next()
  }
  else {
    res.send("You must login first")
  }
}

router.get("/:id", isLogin, answers.getAll)
router.post("/:id", isLogin, answers.insert)
router.delete("/:id", isLogin, answers.remove)


module.exports = router
