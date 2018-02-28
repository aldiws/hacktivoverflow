const express = require('express')
const router = express.Router()
const questions = require("../controller/questions")
const jwt = require('jsonwebtoken');

const isLogin = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token,"shhhhh")
    console.log('==============================',decoded);
    req.headers.oten = decoded
    console.log("==========================================================================>", req.headers.oten);
    next()
  }
  else {
    res.send("maaf anda harus login")
  }
}

router.get("/", isLogin, questions.getAll)
router.post("/", isLogin, questions.insert)
router.put("/:id", isLogin, questions.edit)
router.delete("/:id", isLogin, questions.remove)
router.get("/all", questions.getTimelineQuest)
router.get("/all/:id", questions.getid)


module.exports = router
