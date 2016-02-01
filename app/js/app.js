import angular from 'angular';

// angular modules
import constants from './app.constants';
import config from './app.config';
import run from './app.run';
import './core'
import './templates';
import './layoutModule'
import './videoPlayerModule';
import './servicesModule';


window.app = angular.module('app', [
    'app.core',
    'app.LayoutModule',
    'app.videoPlayerModule',
    'app.servicesModule'
]);

angular.module('app')
    .constant('AppSettings', constants)
    .config(config)
    .run(run);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
