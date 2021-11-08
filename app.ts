import express from "express"; //Node.js web framework
import dotenv from "dotenv"; //to hide the API key by making use of env variable
import routes from "./routes";
//import open from "open";

dotenv.config();

const app = express();
app.use(express.static(__dirname + "/html"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "html/index.html");
});
app.use(routes);

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.listen(port, () => {
  console.log("🚀 Server listening on http://localhost:" + port);
  //open(`http://localhost:${port}`);
});
