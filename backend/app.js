// Module's Import

const cors = require("cors");
const config = require("./config.json")[process.env.NODE_ENV || "development"];
const db = require("./loders/mongodb");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const { env } = require("process");

// const Configs = process.env.DB_NAME;
// console.log(Configs);

// Creating express application object
let app = express();
app.use(express.json()); // parse application/json
app.use(cors()); // CORS
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(express.static("public"));
app.use(bodyParser.json());

// Initialize Routes
let routes = fs.readdirSync("./routes");
for (const index in routes) {
  app.use(require(`./routes/${routes[index]}`));
}
app.use("/api/items", require("./router/api/items"));
app.use("/api/users", require("./router/api/user"));
app.use("/api/auth", require("./router/api/auth"));

// Invalid Routes Handling (404)
app.use((req, res, next) => {
  let resBody = {
    success: false,
    message: "Resource not found",
  };
  res.status(404).json(resBody);
});

// Error Handling (500)
app.use((err, req, res, next) => {
  let resBody = {
    success: false,
    message: "Internal server error",
  };
  res.status(500).json(resBody);
});

const PORT = config.mongodb.port;
app.listen(PORT, () => {
  console.log(`       Server running on port ${PORT}`);
});

// ======================== worked
// db.createUser({
//   user: "mongoadmin",
//   pwd: "mongoadmin",
//   roles: [{ role: "userAdminAnyDatabase", db: "projectmanage" }],
// });

// // ====================== worked
// db.createUser({
//   user: "taskManageUser",
//   pwd: "TaskManageDemo",
//   roles: [
//     {
//       db: "task",
//       role: "dbOwner",
//     },
//   ],
// });
