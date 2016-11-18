(function() {
    angular
        .module('swiftlearn.dashboard', [
            'ui.bootstrap',
        ])
        .factory('EventServices', EventServices)
        .controller('DashboardController', DashboardController)
        .directive('drProfile', drProfile)
        .directive('drProgressbar', drProgressbar)
        .directive('drSidebar', drSidebar)
        .directive('drRightsidebar', drRightsidebar)


    ;

    /////////////////////


    function DashboardController($scope, EventServices, ProfileServices, CURRENT_USER) {
        var self = this;
        $scope.members = [];
        $scope.events = [];
        $scope.current_id = CURRENT_USER.id;
        

        $scope.$watch(function() {
            return !ProfileServices.loading;
        }, function() {
            self.members = ProfileServices.members;

        });

        EventServices.list().then(function(response) {
            $scope.events = response.data;
        });

        
    }

    /**
     * Directives
     * @description All directives are prefixed with `sl` (SwiftLearn)
     *               following the best practices from ng-docs
     *             https://docs.angularjs.org/guide/directive
     */
    function drProfile() {
        return {
            restrict: 'E',
            scope: {
                profile: '='
            },
            templateUrl: '/static/frontend/templates/includes/dr-profile.html'
        };
    }

    function drRightsidebar() {
        return {
            restrict: 'E',
            scope: {
                rightsidebar: '='
            },
            templateUrl: '/static/frontend/templates/includes/dr-rightsidebar.html'
        };
    }

    function drProgressbar() {
        return {
            restrict: 'E',
            scope: {
                progress: '='
            },
            templateUrl: '/static/frontend/templates/includes/dr-progressbar.html'
        };
    }

    function drSidebar() {
        return {
            restrict: 'E',
            scope: {
                sidebar: '='
            },
            templateUrl: '/static/frontend/templates/includes/dr-sidebar.html'
        };
    }

    /**
     * Services (Factory)
     * @description Factories used to retrieve data for templates
     */

    function EventServices($http, API_URL) {
        var services = {
            list: eventList,
            create: eventCreate,
        };

        return services;

        function eventList() {
            return $http.get(API_URL + 'events/');
        }
    }

})();
