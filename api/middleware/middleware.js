function logger(req, res, next) {
  console.log((req.method)(req.url)(new Date)) 

  next();

} 

function validateUserId(req, res, next) {
}

function validateUser(req, res, next) {

}

function validatePostId(req, res, next) {

}

function validatePost(req, res, next) {

}


module.exports = [
  logger, 
  validateUserId,
  validatePostId, 
  validateUser,
  validatePost
]