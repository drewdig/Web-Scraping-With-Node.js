// Code source: https://www.smashingmagazine.com/2015/04/web-scraping-with-nodejs/
// This code scrapes the latest weather info from the site wunderground

var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://ionicabizau.net/";
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      headline = $("h1").text(); 
    
    console.log("My extracted text is -- " + headline);
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
