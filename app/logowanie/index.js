import angular from 'angular';

import uirouter from 'angular-ui-router';
import routing from './log.routes';

import 'firebase';
import angularFire from 'angularfire';

import LogController from './log.controller';
import LogService from './log.service';
import HomeService from '../home/home.service';


export default angular.module('app.log', [uirouter,angularFire])
  .config(routing)
  .controller ("LogController",LogController)
  .service('LogService', LogService)
  .service('HomeService', HomeService)
  .name;