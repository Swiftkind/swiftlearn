(function() {
    angular
        .module('swiftlearn.components', [
            'ui.bootstrap'

        ])
        .factory('SidebarServices', SidebarServices)
        .controller('NavController', NavController)
        .controller('SideBarController', SideBarController)

    ;

    function NavController($scope, ProfileServices, CURRENT_USER) {
        var self = this;

        self.ProfileServices = ProfileServices;

        $scope.$watch(function() {
            return !ProfileServices.loading;
        }, function() {
            $scope.profile = ProfileServices.members[CURRENT_USER.id];
        });
    }

    function SideBarController($scope, SidebarServices, ProfileServices) {
        var self = this;
        $scope.members = [];
        $scope.events = [];

        self.ProfileServices = ProfileServices;

        $scope.$watch(function() {
            return !ProfileServices.loading;
        }, function() {
            self.members = ProfileServices.members;

        });
        SidebarServices.list().then(function(response) {
            $scope.events = response.data;
        });
    }

    function SidebarServices($http, API_URL) {
        var service = {
            list: SidebarList
        };
        return service;

        function SidebarList() {
            return $http.get(API_URL + 'events/' + 'user/');
        }

    }

})();
