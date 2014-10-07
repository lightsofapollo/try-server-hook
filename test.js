#!/usr/bin/env node

var pf = require('./misc/platform_files');
var fs = require('fs');

pf.all('v2.0', function(e, o) {
  fs.writeFileSync('v2.0.json', JSON.stringify(o));
  pf.all('v2.1', function(e, o) {
    fs.writeFileSync('v2.1.json', JSON.stringify(o))
  });
});

