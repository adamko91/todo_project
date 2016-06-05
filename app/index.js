import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';


import log from './logowanie';

const ngModule = angular
        .module('app', [
          uirouter, 
          log
        ])
        .config(routing);