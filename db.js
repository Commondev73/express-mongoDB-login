const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/login-passport", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
