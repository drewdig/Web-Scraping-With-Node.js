# Web-Scraping-With-Node.js
Using Node.js to create a powerful web scraper that is both extremely versatile and completely free. (Based on article Web Scrapping by Smashing Magazine)

Web Scraping With Node.js
By Elliot Bonneville
https://www.smashingmagazine.com/2015/04/web-scraping-with-nodejs/

Web scraping is the process of programmatically retrieving information from the Internet. As the volume of data on the web has increased, this practice has become increasingly widespread, and a number of powerful services have emerged to simplify it. Unfortunately, the majority of them are costly, limited or have other disadvantages. Instead of turning to one of these third-party resources, you can use Node.js to create a powerful web scraper that is both extremely versatile and completely free.
In this article, I’ll be covering the following:
two Node.js modules, Request and Cheerio, that simplify web scraping;
an introductory application that fetches and displays some sample data;
a more advanced application that finds keywords related to Google searches.

here are the modules we’ll be using.

REQUEST
While Node.js does provide simple methods of downloading data from the Internet via HTTP and HTTPS interfaces, you have to handle them separately, to say nothing of redirects and other issues that appear when you start working with web scraping. The Request module merges these methods, abstracts away the difficulties and presents you with a single unified interface for making requests. We’ll use this module to download web pages directly into memory. To install it, run npm install request from your terminal in the directory where your main Node.js file will be located.

CHEERIO
Cheerio enables you to work with downloaded web data using the same syntax that jQuery employs. To quote the copy on its home page, “Cheerio is a fast, flexible and lean implementation of jQuery designed specifically for the server.” Bringing in Cheerio enables us to focus on the data we download directly, rather than on parsing it. To install it, run npm install cheerio from your terminal in the directory where your main Node.js file will be located.

Implementation
The code below is a quick little application to nab the temperature from a weather website. I popped in my area code at the end of the URL we’re downloading, but if you want to try it out, you can put yours in there (just make sure to install the two modules we’re attempting to require first; you can learn how to do that via the links given for them above).

var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 02888;
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      temperature = $("[data-variable='temperature'] .wx-value").html();
      
    console.log("It’s " + temperature + " degrees Fahrenheit.");
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});

Installing the local Node.js environment
1. Download Node.js from https://nodejs.org/en/download/
2. This package will install Node.js v6.10.3 and npm v3.10.10 into /usr/local/
3. To install Node.js, run npm install request from your terminal in the directory where your main Node.js file will be located
4. Node.js was installed at /usr/local/bin/node , npm was installed at , /usr/local/bin/npm , Make sure that /usr/local/bin is in your $PATH.
5. To install Request - type "npm install request" from your terminal in the directory where your main Node.js file will be located which is /usr/local/bin/node (permission denied fail notices unless you run as psuedo admin with sudo ("superuser do"), command is "sudo npm install request"
6. Installing Cheerio - "npm install cheerio" from your terminal in the directory where your main Node.js file will be located
7. To edit your alias commands - cd /Users/andrewdigenova open .bash_profile
8. to run the above script with Node.js type "node SmashMag-Scrapping-Wunder.js

IN YOUR BROWSER LINK
Visit the page you want to scrape in your browser, being sure to record its URL.
Find the element(s) you want data from, and figure out a jQuery selector for them.

IN YOUR CODE LINK
Use request to download the page at your URL.
Pass the returned data into Cheerio so you can get your jQuery-like interface.
Use the selector you wrote earlier to scrape your data from the page.

how to write a Jquery selector
https://www.w3schools.com/jquery/trysel.asp
example:
$("p:first-of-type") is the selctor
All <p> elements that are the first <p> element of their parent. is what it means

for more information or to get more details on setting up the Node.js environment correctly see -
How To Use node.js, request and cheerio to Set Up Simple Web-Scraping
https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping

