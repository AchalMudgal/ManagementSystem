const express = require("express");
const app = express();

const {PORT} = require("./constants/config");

app.listen(PORT,()=>{
  console.log(`Server running at PORT : ${PORT}`);
});