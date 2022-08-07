const mongoose = require("mongoose");
const app = require('../app');
const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(PORT || 3000, () =>
      console.log("Database connection successful")
    )
  )
  .catch((error) => {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  });