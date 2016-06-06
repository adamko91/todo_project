import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './config';

import home from './home'; 
import log from  './logowanie';
import stat from './statistic';


const ngModule = angular
        .module('app', [
          uirouter, 
          home,
          stat,
          log
        ])
        .config(routing);