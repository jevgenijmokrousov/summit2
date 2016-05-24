'use strict';

var defaultThemes   = require('./themes'),
    _               = require('underscore');

var summitTheme = {
    summit2: {
        area: 'frontend',
        name: 'Vortex/summit2',
        locale: 'en_US',
        files: [
            'css/main',
        ],
        dsl: 'less'
    }
};

module.exports = _.extend(defaultThemes, summitTheme);
