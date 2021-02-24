<<<<<<< HEAD
// const db = require("../models");
// // const passport = require("../config/passport");
// module.exports = app => {
//   app.get("/api/chat/:id", (req, res) => {
//     console.log(req.user);
//     db.User.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(result => {
//       res.json(result);
//       console.log(result.email);
//     });
//   });
// };
=======
const db = require("../models");
// const passport = require("../config/passport");
module.exports = app => {
  app.get("/api/chat/:id", (req, res) => {
    console.log(req.User);
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.json(result);
      console.log(result.email);
    });
  });
};
>>>>>>> ab4db0da422acc4bce469b9441c62918b0a0685c
