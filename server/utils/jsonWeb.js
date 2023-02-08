const jwt = require('jsonwebtoken');

exports.signToken = (id, req, res) => {

    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() + 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    });

    return token
  };