function validateEmail(email) {
  const validity = email && email.includes('@') && email.includes('.com')
  return validity
}

function validatePassword(password) {
  const validityPassword = password && password.length >= 4 && password.length <= 8
  return validityPassword
}

function validateUsername(username) {
  const validityUsername = username && username.length > 3
  return validityUsername
}

function validationToken(req, res, next) {
  const { email, password } = req.body
  if (!validateEmail(email) || !validatePassword(password)) {
    return res.status(400).json({ message: "invalid data" })
  }
  next()
}

//Middlewware validação de cadastro
function validation(req, res, next) {
  const { username, email, password } = req.body
  if (!validateEmail(email) || !validatePassword(password) || !validateUsername(username)) {
    return res.status(400).json({ message: "invalid data" })
  }
  next()
}

module.exports = {
  validation,
  validationToken
};
