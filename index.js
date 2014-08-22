"use strict"

var $ = require('jquery')

console.log($)

$(function(){
  console.log($)
})

require('npm-typeahead')({
  npmUrl: '',// URL to re-direct the user to.
  searchUrl: 'https://typeahead.npmjs.com', // URL for search npm-typeahead REST server.
  $: $
});
