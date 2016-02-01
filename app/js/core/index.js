import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import 'videogular';
import 'videogular-poster';
import 'videogular-controls';
import 'videogular-buffering'
import 'videogular-overlay-play';


export default angular.module('app.core', [
    'ui.router',
    'ngSanitize',
    'ngMaterial',
    'templates',
    'com.2fdevs.videogular',
    'com.2fdevs.videogular.plugins.controls',
    'com.2fdevs.videogular.plugins.overlayplay',
    'com.2fdevs.videogular.plugins.poster'
]);