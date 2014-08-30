var cheerio = require('cheerio');
var superagent = require('superagent');

superagent
  .get('https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elemente')
  .end(function (err, res) {
    var $ = cheerio.load(res.text);
    var codes = $('ul#inline-elements')
                .text()
                .replace(/\s/gm,',')
                .split(",")
                .filter(String);

    console.log('/**');
    console.log(' * This file automatically generated from `build.js`.');
    console.log(' * Do not manually edit.');
    console.log(' */');
    console.log();
    console.log('module.exports = %s;', JSON.stringify(codes, null, 2));
  });
