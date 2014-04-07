/*jslint
    browser: true,
    devel:true ,
    node:true,
    nomen: true,
    es5:true
*/

/**
 * @auth Gaurav Meena
 * @date 01/16/2014
 * This script will contain all controller related to account section
 */

/*global angular*/

'use strict';

angular.module('odeskApp')
    .controller('AccountConfigCtrl', function ($scope, $http, userProfile) {
        $scope.profile = {"attributes":[{"name":"firstName","value":"Gaurav","description":null},{"name":"lastName","value":"Meena","description":null},{"name":"email","value":"gauravmeena0708@gmail.com","description":"User email"}]};
        userProfile.query(function(resp){
            $scope.profile = resp;
        });
    });
