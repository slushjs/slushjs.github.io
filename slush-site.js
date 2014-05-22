angular.module('home', []);

(function(module) {
try {
  module = angular.module('slush-site-templates');
} catch (e) {
  module = angular.module('slush-site-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/slush-site/home/home.html',
    '<h1>What is Slush?</h1><p>Slush is a scaffolding tool, i.e. a tool to help you generate new project structures to get you up and running with your new project in a matter of seconds.</p><h2>Getting started</h2><p>First you\'ll have to install <a href="http://nodejs.org">NodeJS</a> &ndash; if you haven\'t already.</p><p>When NodeJS have been installed you can install the Slush CLI using <a href="https://www.npmjs.org/"><code>npm</code></a> with:</p><pre><code>npm install -g slush</code></pre><p>You can verify that all is well by running:</p><pre><code>slush -v</code></pre><p>Then you should see something like: <code>"[slush] 1.0.0"</code> in your terminal.</p><h3>Slush generators</h3><p>To be able to use Slush to scaffold new projects you\'ll need a <em>Slush generator</em>. You can find all available generators at the <a href="http://slushjs.github.io/generators">Slush generator search page</a>.</p><p>Installing a generator is easily done with npm. For instance, to install the <code>slush-angular</code> generator you run:</p><pre><code>npm install -g slush-angular</code></pre><h2>Scaffold your first project</h2><p>If you have followed the steps above, and installed both <code>slush</code> and the <code>slush-angular</code> generator, you can generate a new AngularJS project simply by invoking:</p><pre><code>slush angular</code></pre><p>Answer the questions and bam, there you have it &ndash; your first project generated with <strong>Slush</strong>!</p>');
}]);
})();


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

angular.module('home')
  .controller('HomeCtrl', function () {
    'use strict';

  });
