import angular from 'angular';
import MainService from './main.service'

const servicesModule = angular.module('app.servicesModule', []);

angular.module('app.servicesModule')
    .factory('MainService', MainService);

export default servicesModule;