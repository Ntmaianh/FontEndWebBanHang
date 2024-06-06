app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }]);
app.controller('QuanLiSanPhamCtrl', function ($scope, $http, $routeParams) {
    $scope.danhSachSanPham = [];
    // GET  

    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham'
    }).then(function (response) {
        $scope.danhSachSanPham = response.data;
        // console.log($scope.danhSachSanPham);
    })

    // chi tiết sản phẩm 

    $scope.sanpham = {};
    $http({
        method: 'GET',
        url: 'http://localhost:3000/san-pham/' + $routeParams.id
    }).then(function (response) {
        $scope.sanpham = response.data;
    })

    // xóa 
  
    $scope.DeleteSanPham = function (id) {
        if(confirm("Bạn chắc chắn muốn xóa ?")) {
            $http({
                method: 'DELETE',
                url: 'http://localhost:3000/san-pham/' + id
            }).then(function () {
                alert("Xóa sản phẩm thành công!")
            })
        }
    }

  

})