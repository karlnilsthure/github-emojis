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

const formatKey = string => {
  return string.charAt(0).toUpperCase() + string.slice(1).replace(/_/g, " ");
};

const mapObjectToArray = data => {
  return Object.keys(data).map(key => {
    const formatedKey = formatKey(key);
    return { title: formatedKey, emojiUrl: data[key] };
  });
};

app.get("/api/emojis", async (req, res) => {
  const { data } = await fetchData();
  const emojiArray = mapObjectToArray(data);

  res.send({ emojiArray });
});

app.get("/api/emojis/:searchParam", async (req, res) => {
  const searchParam = req.params.searchParam.toLowerCase();

  const { data } = await fetchData();
  const pattern = new RegExp(searchParam, "g");
  const emojiArray = mapObjectToArray(data).filter(emoji => {
    return pattern.test(emoji.title.toLowerCase());
  });

  const errorMessage = emojiArray.length ? null : "No match :(";

  res.send({ emojiArray, errorMessage });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
