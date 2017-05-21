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

another interactive Jquery selector
http://www.tutorialsteacher.com/jquery/jquery-selectors

Excellent artcile and website about how to scrap websites
How to Scrape Web Pages With Node.js and jQuery
https://code.tutsplus.com/tutorials/how-to-scrape-web-pages-with-nodejs-and-jquery--net-22478
especially good is selector examples such as these:
//I know .video-entry elements contain the regular sized thumbnails
            //for each one of the .video-entry elements found
            $videos.each(function (i, item) {
               
					 //I will use regular jQuery selectors
                var $a = $(item).children('a'),
                   
						  //first anchor element which is children of our .video-entry item
                    $title = $(item).find('.video-title .video-long-title').text(),
                    
						  //video title
                    $time = $a.find('.video-time').text(),
                    
						  //video duration time
                    $img = $a.find('span.clip img'); //thumbnail
               
					 //and add all that data to my items array
                self.items[i] = {
                    href: $a.attr('href'),
                    title: $title.trim(),
                    time: $time,

jQuery Selectors
https://www.w3schools.com/jquery/jquery_ref_selectors.asp
https://www.w3schools.com/jquery/jquery_selectors.asp

Using jQuery selectors inside Firebug 
(Firebug and FireFinder are extensions for Firefox that allow you to interact with HTML on a page and possibly try Jquery selectors)
http://www.codechewing.com/library/jquery-selectors-inside-firebug/

Note: tracking protection may interfere with Firebug results you need, so use "how to disable tracking protection" in Firefox
https://support.mozilla.org/en-US/kb/tracking-protection-pbm#w_how-to-turn-tracking-protection-off

Firstly, you need to make sure you’ve got a jQuery library running inside of the document. If you don’t already, do a Firebug include() inside the command window. Like this: include("//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"). See the link for more details.

Also very helpful artcile
How to Write a Web Scraper in Node.js
by Johnny B. (Ionică Bizău)
https://www.codementor.io/johnnyb/how-to-write-a-web-scraper-in-nodejs-du108266t
scrapping from his own simple blog website at:
https://ionicabizau.net
maybe best way for me to practice writing Jquery selectors is to use Firefox / Firebug / Firefinder and test my own slector constructs on Jonny B's simple website
make sure to include Jquery library inside the firebug environement
include("//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js")



for more information or to get more details on setting up the Node.js environment correctly see -
How To Use node.js, request and cheerio to Set Up Simple Web-Scraping
https://www.digitalocean.com/community/tutorials/how-to-use-node-js-request-and-cheerio-to-set-up-simple-web-scraping

