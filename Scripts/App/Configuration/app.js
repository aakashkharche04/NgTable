var tableModule = angular.module('tableDirective', ['ui.router'
    , 'ui.bootstrap', 'ngTable'])
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
            }]);
     