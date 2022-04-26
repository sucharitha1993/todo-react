const express = require("express");
const app = express();
const port = 5000;
app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  next();
});
app.get("/getTodos", (req, res) => {
  res.send(
    JSON.stringify({
      message: "success",
      data: [
        "Running",
        "Finish homework",
        "Wash dishes",
        "Clean room",
        "Make waffles",
        "Go Shopping",
        "Play Badminton",
      ],
    })
  );
});
app.listen(port, () => console.log(`Listening on port ${port}`));
