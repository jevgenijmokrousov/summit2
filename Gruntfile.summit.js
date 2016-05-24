'use strict';

var defaultGruntfile    = require('./Gruntfile'),
    _                   = require('underscore');

var summitGruntfile = {};
    summitGruntfile.themes = require('./dev/tools/grunt/configs/themes.summit');

    //summitGruntfile.refresh  = function(){
    //    var tasks = [];
    //    _.each(summitGruntfile.themes, function(theme, name) {
    //        tasks.push('clean:' + name);
    //        tasks.push('exec:' + name);
    //        tasks.push('less:' + name);
    //    });
    //    grunt.task.run(tasks);
    //}

module.exports = _.extend(defaultGruntfile, summitGruntfile);
