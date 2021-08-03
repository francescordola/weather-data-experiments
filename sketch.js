let weather;
let r = 0;
let b = 255;

let api = 'http://api.openweathermap.org/data/2.5/weather?q=';
let apiKey = 'API key';
let units = '&units=metric';

function setup() {
  /* per posizionare la canvas come background guarda CSS 
  createCanvas(windowWidth, windowHeight);
  clear(0, 0, width, height); */

  createCanvas(602, 602);

  let button = select('#submit');
  button.mousePressed(askWeather);

  input = select('#city');
}

function askWeather() {
  let url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  console.log(data);
  weather = data;
}

function draw() {

  if (weather) {

    /* map([value that I want to analyse], [real temperature values], [colors values that I want to give to the canvas])
    col = map(weather.main.temp, 0, 40, 0, 255);
    background(col); */

    /*TEMP*/
    r = map(weather.main.temp, 0, 40, 0, 255);
    b = map(weather.main.temp, 0, 40, 255, 0);
    background(r, 0, b);

    /*HUMIDITY*/
    fill(255, 50);
    noStroke();
    ellipse(width / 2, height / 2, weather.main.humidity, weather.main.humidity);

    /*PRESSURE*/
    //let constr = constrain(weather.main.pressure, 400, 400);
    let constr = map(weather.main.pressure, 1000, 1050, 300, 400);

    fill(255, 50);
    noStroke();
    ellipse(width / 2, height / 2, constr, constr);

    /*WIND*/
  }
}
