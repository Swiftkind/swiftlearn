(function () {
    angular
        .module('swiftlearn.events', [
            'ui.bootstrap',

        ])
        .factory('EventServices', EventServices)
        .controller('EventController', EventController)
        
    ;

    function EventController($scope, EventServices, ProfileServices, CURRENT_USER){

        var self = this;
        $scope.members = [];
        $scope.events = [];
        $scope.current_id = CURRENT_USER.id;
        self.create = eventCreate;
        self.ProfileServices = ProfileServices;
        

        $scope.$watch(function() {
            return !ProfileServices.loading;
        }, function() {
            self.members = ProfileServices.members;

        });
       

        function eventCreate(form){
            console.log('asfasfas')
            EventServices.create(form).then(function(response){
                console.log(response.data)
                $scope.events.push(response.data);

            });
        }
        
    }

    function EventServices($http, API_URL) {
        var services = {
            list: eventList,
            create: eventCreate,
        };

        return services;

        function eventList() {
            return $http.get(API_URL + 'events/');
        }

        function eventCreate(form){
            return $http.post(API_URL + 'events/', form);
        }
    }  
})();