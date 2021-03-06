var path = require("path");

// routing
module.exports = function(app) {
  app.get("/listings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/listings.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
