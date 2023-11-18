const express = require("express");
const mongoose = require("mongoose");

const app = express();
/* Loading the environment variables from the .env file. */
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const PORT = process.env.PORT || 5000;
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/productivity-app";
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/todoapiDB";

    /* Telling the application to use the express.json() middleware. This middleware will parse the body of
any request that has a Content-Type of application/json. */
app.use(express.json());
const ActivityRouter = require("./routes/activity.route");
app.use("/api", ActivityRouter);

/* This is a route handler. It is listening for a GET request to the root route of the application.
When it receives a request, it will send back a response with the string "Hello World!". */
/* Connecting to the database and then starting the server. */
// mongoose
//   .connect(MONGODB_URI, { useNewUrlParser: true })
//   .then(() => {
//     app.listen(PORT, console.log("Server stated on port 5000"));
//   })
//   .catch((err) => {
//     console.log(err);
//   });
mongoose.connect("mongodb://127.0.0.1:27017/productivity-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
        .then(() => console.log("Connected to DB"))
        .catch(console.err);

app.get("/", (req, res) => {
            res.send("Hello World!");
          });

    
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));