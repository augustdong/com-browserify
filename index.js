/**
 * @author August Dong
 * @e-mail august_dong@yahoo.com
 */
"use strict";

var through = require('through2');
var path = require('path');

var isHtml = function(file) {
    return /\.html$/.test(file);
}

var isCss = function(file) {
	return /\.css$/.test(file);
}

var escapeHtmlContent = function(content) {
    return content.replace(/\\/g, '\\\\').replace(/'/g, '\\\'').replace(/\r?\n/g, '\\n\' +\n    \'');
};

var process = function() {
	return through.obj(function (row, enc, next) {
		if (isHtml(row.file)) {
			row.source = "module.exports = '" + escapeHtmlContent(row.source) + "';";
        } else if (isCss(row.file)) {
            row.source = "module.exports = " + JSON.stringify(row.source);
        }
        this.push(row);
        next();
    });
};

var com = function(b) {
	var pipeline = b.pipeline;
	var syntax = pipeline.get('syntax');
	syntax.unshift(process());
};

module.exports = exports = com;