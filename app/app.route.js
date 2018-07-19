/**
 * Created by Esleider Tafur on 7/07/17.
 */
(function(angular) {
    'use strict';

    angular
        .module('angularKHTest')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        // State
        $stateProvider.state('app', {
            abstract : true,
            views    :{
                'main@': {
                    template: '<div><div ui-view="content" style="width: 100%"></div></div>'
                }
            }
        })
        .state('/total',{
          url:"/total",
          templateUrl:"total.html",
        });

        $urlRouterProvider.otherwise('/articulos');

    }

})(window.angular);
