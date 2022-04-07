const http = require("http");
const app = require("./app");

const { loadPlanetData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

// his makes it easy to provide both HTTP and HTTPS versions of your app with the same code base
// https.createServer(options, app).listen(443
const server = http.createServer(app);

async function startServer() {
  await loadPlanetData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
