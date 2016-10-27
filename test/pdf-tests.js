var read = require('fs-readdir-recursive');
var filepath = require('path');
var assert = require('assert');

fileNames = read('./games');
pdfFileNames = fileNames.filter(function (x) {
    return filepath.extname(x) === '.pdf';
});

describe('Rulebooks', function () {
    pdfFileNames.forEach(function (path) {
        it(path, function () {
            assert(path.includes('/rulebook-'), path + " is improperly formatted.");
            assert.equal(path, path.toLowerCase(), path + " has uppercase letters.");
        });
    });
});
