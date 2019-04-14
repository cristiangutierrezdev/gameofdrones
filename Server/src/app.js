const express = require("express");
const router = require("./routes");
const cors = require("cors");
const morgan = require("morgan");
const config = require("./config");
const { errors } = require('celebrate')
const { dbConnection } = require("./models");
const app = express();

const PORT = process.env.PORT || config.storageConfig.port

app.use(morgan("combined"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);
app.use(errors())

dbConnection
  .then(result => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(err => { 
    console.log(err);
  });
