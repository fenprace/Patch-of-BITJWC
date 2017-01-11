// Patch of BITJWC User Script
// version 1.0!
// Copyright (c) 2016, Prace Fen
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// ==UserScript==
// @name          Patch of BITJWC
// @description   A script fixing bugs on the pages of jwc.bit.edu.cn.
// @include       http://10.5.2.80/*
// ==/UserScript==

(function() {
var replacer = document.createElement("script");

replacer.innerHTML = "\
function hidemenu(main, menuid){\
  var element = document.getElementById(menuid);\
  element.style.cssText = 'visibility: hidden;';\
}\
\
function showmenu(main, menuid) {\
  var switcher = document.getElementById(main);\
  var element = document.getElementById(menuid);\
  element.style.cssText =\
    'visibility: visible; top: 84px; left: '\
    + switcher.offsetLeft\
    + 'px;';\
}"

document.body.insertBefore(replacer, document.body.lastChild);
})();
