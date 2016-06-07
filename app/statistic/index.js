import angular from 'angular';

import uirouter from 'angular-ui-router';
import routing from './stat.routes';

import StatController from './stat.controller';
import TodoService from '../todo/todo.service';
import HomeService from '../home/home.service';



export default angular.module('app.stat', [uirouter])
  .config(routing)
  .controller ("StatController",StatController)
  .service('HomeService', HomeService)
  .service('TodoService', TodoService)
  .name;