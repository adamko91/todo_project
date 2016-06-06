export default function routes($stateProvider) {
  $stateProvider
    .state('stat', {
      url: '/',
      template: require('./stat.html'),
      controller: 'StatController',
      controllerAs: 'statController'
    });
}