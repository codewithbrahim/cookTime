import './styles/app.css';

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

const $ = require('jquery');
require('bootstrap');
$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});
