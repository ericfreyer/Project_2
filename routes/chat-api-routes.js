<<<<<<< HEAD
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
=======
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
>>>>>>> b87903fb024d023a29d2eaa1b44b5550c2b16022
