app.controller('ChiTietSanPhamCtrl',function($scope,$http,$routeParams){
    $scope.sanpham = {};
    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham/' + $routeParams.id
    }).then(function(response){
        $scope.sanpham = response.data;
    })
})