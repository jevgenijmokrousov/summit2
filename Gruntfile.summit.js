'use strict';

var defaultGruntfile    = require('./Gruntfile'),
    _                   = require('underscore');

var summitGruntfile = {};
    summitGruntfile.themes = require('./dev/tools/grunt/configs/themes.summit');

module.exports = _.extend(defaultGruntfile, summitGruntfile);
