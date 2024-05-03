import express from "express";

const app = express();

app.get("/", (req, res) => {
  const name = req.query["name"] || "World";
  res.send(`Goodbye ${name}!`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
