const request = require('request');

// TODO: Remove test code below
// TODO: Fine as a job for now, but should run server code later to run as svc.
request('https://dojour.us/api/', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});
