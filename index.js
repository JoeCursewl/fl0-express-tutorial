import express from "express";
const app = express();
// Important! Set the port using the PORT environment variable
const port = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
    const words = [
        {
            "thing": "Hello word",
            "name": "Anthony"
        }
    ]
  res.send(words);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});