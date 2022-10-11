const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "edd88bf35dmshefcfc738b014340p1dd318jsnc96e0b05baf2",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export default async function getWeatherInfo(country) {
  await fetch(
    `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${
      country + " Spain"
    }&days=3}`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
