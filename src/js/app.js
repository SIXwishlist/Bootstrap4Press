import $ from 'jquery';
import Popper from 'popper.js';


// import 'bootstrap'

import 'bootstrap/js/src/util';
import 'bootstrap/js/src/alert';
import 'bootstrap/js/src/button';
import 'bootstrap/js/src/carousel';
import 'bootstrap/js/src/collapse';
import 'bootstrap/js/src/dropdown';
import 'bootstrap/js/src/index';
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/popover';
import 'bootstrap/js/src/scrollspy';
import 'bootstrap/js/src/tab';
import 'bootstrap/js/src/tooltip';

// import '../scss/app.scss';

$(document).ready(function () {
    console.log('Hello Bootstrap4Press');
    $('[data-toggle="tooltip"]').tooltip()
})