app.controller('ChiTietDonHangCtrl',function($scope,$http,$routeParams){
    $scope.donHang = {};
    $http({
        method: 'GET',
        url: 'http://localhost:3000/hoa-don/' + $routeParams.id
    }).then(function(response){
        $scope.donHang = response.data;
    })
})