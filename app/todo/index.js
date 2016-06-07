import angular from 'angular';

import uirouter from 'angular-ui-router';
import routing from './todo.routes';

import 'firebase';
import angularFire from 'angularfire';

import TodoController from './todo.controller';
import TodoService from './todo.service';
import HomeService from '../home/home.service';


export default angular.module('app.todo', [uirouter,angularFire])
  .config(routing)
  .controller ("TodoController",TodoController)
  .service('TodoService', TodoService)
  .service('HomeService', HomeService)
  .name;