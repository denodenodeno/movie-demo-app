import angular from 'angular';
import MainCtrl from './main.controller';
import trusted from './trusted.filter';

const VideoPlayerModule = angular.module('app.videoPlayerModule', []);

angular.module('app.videoPlayerModule')
    .controller('MainCtrl', MainCtrl)
    .filter('trusted', trusted);

export default VideoPlayerModule;
