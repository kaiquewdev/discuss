var index = function ($scope,
                      $http, 
                      $location) {
    // Project tree sets
    $scope.project = {
        name: 'Test',
        wall: [{
            author: '@user',
            body: 'Lorem ipsum dolor sit amet'
        }]
    };

    $scope.message = '';

    $scope.sendMessage = function () {
        var wallPost = {
            author: '@test',
            body: $scope.message    
        };

        $scope.project.wall.unshift( wallPost );
    };
};
