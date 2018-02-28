const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports = {

  isLogin: (req, res, next) => {
    console.log('req : ', req);
    var token = ''
    if (req.headers.token) {
      token = req.headers.token;
    } else if (req.body.token) {
      token = req.body.token
    }
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.log(err);
        res.status(403).json({
          mesaage: 'token not verify'
        })
      } else {
        console.log(JSON.stringify(decoded));
        // req.username = decoded.username
        req.decoded = decoded
        req.id = decoded.id
        next()
      }
    })
  },

  authentication: (req, res, next) => {
    const token = req.headers.token;
    // console.log('=======>',token)
    if (token) {
      jwt.verify(token, secret, (err, decoded) => {
        // console.log('=======>',decoded)
        if (err) {
          return res.status(500).json({
            success: false,
            message: 'Failed to authenticate token.'
          });
        } else {
          req.decoded = decoded
          req.userId = decoded.userId
          next()
        }
      })
    } else {
      return res.status(401).json({
        success: false,
        message: 'No token provided.'
      })
    }
  },


}