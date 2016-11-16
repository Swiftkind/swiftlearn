(function() {
    angular
        .module('swiftlearn.dashboard', [
            'ui.bootstrap',
            'swiftlearn.profile'
        ])
        .factory('EventServices', EventServices)
        .controller('DashboardController', DashboardController)
        .directive('drProfile', drProfile)
        .directive('drProgressbar', drProgressbar)
        .directive('drSidebar', drSidebar)


    ;

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

    function EventServices($http) {
        var services = {
            list: eventList,
        };

        return services;

        function eventList() {
            return $http.get('/api/events/');
        }
    }

})();
