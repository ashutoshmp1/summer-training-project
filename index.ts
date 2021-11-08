import { Router } from "express";
import fetch from "node-fetch";
const weatherRoute = Router();

weatherRoute.get("/weather/:city", (req, res) => {
  const city = req.params.city;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
  ).then(async (apiResponse) => {
    if (apiResponse.status !== 200) {
      return res.sendStatus(apiResponse.status);
    } else {
      const jsonResponse = await apiResponse.json();
      return res.json(jsonResponse);
    }
  });
});

export default weatherRoute;
