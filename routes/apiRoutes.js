var locationData = require("../data/locationData");

// routing
module.exports = function(app) {
  // API GET requests
  app.get("/api/listings", function(req, res) {
    res.json(locationData);
  });

  // API POST requests
  app.post("/api/listings", function(req, res) {
    locationData.push(req.body);
    res.json(true);
});

  // clear listing (testing purposes)
  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    locationData.length = [];

    res.json({ ok: true });
  });
};
