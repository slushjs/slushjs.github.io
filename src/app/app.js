
angular.module('slushSite', [
  'ngRoute',
  'home',
  'slush-site-templates'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/', {
      controller: 'HomeCtrl',
      templateUrl: '/slush-site/home/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
