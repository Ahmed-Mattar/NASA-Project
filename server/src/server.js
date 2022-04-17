const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const { loadPlanetData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL = `mongodb+srv://${process.env.user_name}:${process.env.password}@nasa-cluster.0wtus.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`;

// his makes it easy to provide both HTTP and HTTPS versions of your app with the same code base
// https.createServer(options, app).listen(443
const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
