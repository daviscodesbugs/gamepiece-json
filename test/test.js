var assert = require('assert');
var lint = require('json-lint');
var fs = require('fs');
var read = require('fs-readdir-recursive');

fileNames = read('./games');
filtered = fileNames.filter(function (x) {
    return x.substring(x.length - 5) === '.json';
});

describe('JSON Lint', function () {
    filtered.forEach(function (path) {
        it(path, function () {
            jsonString = fs.readFileSync('./games/' + path);
            var linted = lint(jsonString.toString());
            assert.equal(undefined,linted.error);
        });
    });
});