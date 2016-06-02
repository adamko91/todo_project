export default function routes($stateProvider) {
  $stateProvider
    .state('log', {
      url: '/',
      template: require('./log.html'),
      controller: 'LogController',
      controllerAs: 'log'
    });
}