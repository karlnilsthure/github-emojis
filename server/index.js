const express = require("express");
const axios = require("axios");

const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

app.use(
  express.json({
    type: ["application/json", "text/plain"]
  })
);

const fetchData = async () => {
  try {
    const data = await axios.get("https://api.github.com/emojis");
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

// axios
//   .get("https://api.github.com/emojis")
//   .then(response => {
//     // handle success
//     console.log(response);
//   })
//   .catch(function(error) {
//     // handle error
//     console.log(error);
//   });

app.get("/api/emojis", async (req, res) => {
  const { data } = await fetchData();

  res.send({ data });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
