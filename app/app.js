angular
    .module('App', [])
    .controller('IndexController', [
        '$scope',
        function ($scope) {
            $scope.sort = function () {
                domSort.reverseIdentifier = '- ';
                domSort('#after .search-results li', ['.stars']);
            };
        }
    ]);