const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.json());
const path = require("path");

let dbconnection = require("./auth");

const AdminRoute = require("./routes/adminRoutes");
const messageRoute = require("./routes/messageRoutes");
const taskRoutes = require("./routes/tasksRoute");
const trailClassRoutes = require("./routes/trailClassRoutes");
const ResultsRoutes = require("./routes/resultRoutes");
const StudentRoutes = require("./routes/studentRoutes");
const ReviewRoutes = require("./routes/reviewRoute");
const LectureRouter = require('./routes/LectureRoutes')
const TestRouter = require('./routes/testRoutes')





app.use("/api/admin/", AdminRoute);
app.use("/api/message/", messageRoute);
app.use("/api/task/", taskRoutes);
app.use("/api/trialclass/", trailClassRoutes);
app.use("/api/results/", ResultsRoutes);
app.use("/api/students/", StudentRoutes);
app.use("/api/reviews/", ReviewRoutes);
app.use("/api/lecture/", LectureRouter);
app.use("/api/test/", TestRouter);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const port = process.env.PORT || 2988;

app.listen(port, () => {
  console.log("Server started of Concept Classes");
});
