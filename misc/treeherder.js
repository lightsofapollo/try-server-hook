"use strict";

var config = require('../config');
var url = require('url');

var util = require('util');

function makeUrl(opts) {
  var shortrev = opts.revision || opts.rev;
  shortrev = shortrev.slice(0, 12);
  return util.format(
      'https://%s/#/jobs?repo=%s&revision=%s',
      config.get('TREEHERDER_HOST'),
      opts.tree || config.get('TREEHERDER_REPO'),
      shortrev
  );
}

module.exports = {
  url: makeUrl
}
