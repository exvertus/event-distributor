const request = require('request');

// TODO: Remove test code below
request('https://dojour.us/api/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});
