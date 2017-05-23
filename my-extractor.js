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

// selectors
// $("h1").text() returns Ionică Bizău The Joy of Being a Mentor How I npm What to Do When Your Website is Broken
// $('h1:contains(Joy)') returns <h1>The Joy of Being a Mentor</h1>
// $("#article-title") returns nothing
// $("article-info").parent() returns nothing
