let Photos = require('./api/Photos');
let User = require('./api/User');


var express = require("express");
var router = express.Router();


/* GET users listing. */
router.post("/:userId", function(req, res, next) {
  let user = new User();
  user.createUser(req, res)
});

router.post("/", function(req, res, next) {
  let P
  console.log(req.body);
  console.log(req.query);
  console.log(req.params);
  res.sendStatus(200);
});

router.get("/:userId/photos", function(req, res, next) {
  console.log(req.body);
  console.log(req.query);
  console.log(req.params);
  res.sendStatus(200);
});

router.post("/:userId/photos", function(req, res, next) {
  console.log(req.body);
  console.log(req.query);
  console.log(req.params);
  res.sendStatus(201);
});

module.exports = router;
