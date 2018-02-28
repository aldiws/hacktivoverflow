const ObjectId = require("mongodb").ObjectId
const db = require("../model/users")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getAll = (req, res)=>{
 db.find()
 .then(rows=>{
   res.send(rows)
 })
 .catch(err=>{
   res.send(err)
 })
}

const login = (req, res)=>{  
  db.findOne({username : req.body.username})
  .then(row=>{
    // console.log(row);
    if (bcrypt.compareSync(req.body.password, row.password)) {
      const token = jwt.sign({ id: row._id, username : row.username }, 'shhhhh');
      res.json({token : token, username : row.username})      
    } else {
      res.json({
            success: false,
            message: 'Authentication failed. Wrong password.'
      });
    }
  })
  .catch(err => {
    res.json(err);      
  })
}


const register = (req, res)=>{
  db.create({
    name: req.body.name,
    email: req.body.email,
    username : req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  }).then(response => {
    console.log(response);
    res.send("Register success")
  })
  .catch(err=>{
    console.log(err);
    res.send("Register failed")
  })
}


const remove = (req, res)=>{
  if(req.headers.token == null){
    res.send("1234567")
  }else{
    var decoded = jwt.verify(req.headers.token,"shhhhh")
    if(decoded.id == ObjectId(req.params.id)){
      db.remove({_id: ObjectId(req.params.id)})
      .then(()=>{
        res.send("Delete success")
      }).catch(err=>{
        res.send("Delete failed")
      })
    }else{
      res.send("user not verify to delete")
    }
  }
}

const edit = (req, res)=>{
  if(req.headers.token == null){
    res.send("You must login first")
  }else{
    var decoded = jwt.verify(req.headers.token, "shhhhh")
    if(decoded.id == ObjectId(req.headers.id)){
      db.update({_id: ObjectId(req.params.id)},{
        username : req.body.username,
        password : req.body.password,
        secret : req.body.secret
      })
      .then(()=>{
        res.send("Edit success")
      })
      .catch(err=>{
        res.send("Edit failed")
      })
    }else{
      res.send("user not verify to edit")
    }
  }
}
module.exports = {
  login,
  register,
  getAll,
  remove,
  edit
}
