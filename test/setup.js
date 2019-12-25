let jsdom = require('jsdom-global')();
let jQuery = require("jquery");

global.jQuery = jQuery;
global.$ = jQuery;