import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './log.routes';
import LogController from './log.controller';

export default angular.module('app.log',[])
    .controller ("LogController",LogController);

export default angular.module('app.log', [uirouter])
  .config(routing)
  .controller ("LogController",LogController)
  .name;