'use strict';

const _ = require('lodash');
// const forOwn = require('lodash/forown');
// const includes = require('lodash/includes');
// const replace = require('lodash/replace');
// const isObject = require('lodash/isObject');

function recursiveKeyReplace(obj, search) {
    _.forOwn(obj, (value, key) => {
        // if key matches `search` term, replace all occurences with `replaceValue`
        if (_.includes(key, '.')) {
            const cleanKey = _.replace(key, /\./g, '');
            obj[cleanKey] = value;
            delete obj[key];
        }
        // continue recursively looping through if we have an object or array
        if (_.isObject(value)) {
            return recursiveKeyReplace(value);
        }
    });
    return obj;
}

module.exports = recursiveKeyReplace;
