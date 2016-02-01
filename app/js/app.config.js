function config($compileProvider, $stateProvider, $locationProvider, $urlRouterProvider) {

    'ngInject';

    ////Disable debug info - set to true for development
    $compileProvider.debugInfoEnabled(true);

    ////remove # from the url
    $locationProvider.html5Mode(true);

    ////configure $stateProvider
    $stateProvider
        .state('main', {
            url: '/',
            controller: 'MainCtrl as main',
            templateUrl: 'main.view.html',
            resolve: ['MainService', function (MainService) {
                return MainService.getData();
            }]
        });

    ////default state
    $urlRouterProvider.otherwise('/');

}

export default config;
