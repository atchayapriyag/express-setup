const express = require("express");
const app = express();
const port = 3000;

// Define a route for GET method at "/api/data"
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello, this is your data!" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
