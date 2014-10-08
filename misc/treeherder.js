"use strict";

var config = require('../config');
var url = require('url');

var util = require('util');


function makeUrl(opts) {
  return util.format(
      'https://%s/ui/#/jobs?repo=%s&revision=%s',
      config.get('TREEHERDER_HOST'),
      opts.tree || config.get('TREEHERDER_TREE'),
      opts.revision || opts.rev
  );
}

module.exports = {
  url: makeUrl
}
